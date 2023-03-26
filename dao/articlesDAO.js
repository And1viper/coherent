import mongodb from "mongodb";
import marked from "marked";
import createDomPurify from "dompurify";
import { JSDOM } from "jsdom";

const ObjectId = mongodb.ObjectId;

let articles

export default class ArticlesDAO {
    static async injectDB(conn) {
        if(articles) {
            return
        }
        try {
            articles = await conn.db(process.env.BLOG_NS).collection("blog")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in articlesDAO: ${e}`,
            )
        }
    }
    
    //Getting all the articles
    static async getArticles({
        page=0,
        articlesPerPage = 100,
    } = {}) {
        let query, cursor

        try {
            cursor = await articles
                .find(query)
        } catch(e) {
            console.error(`Unable to issue find command, ${e}`)
            return {articlesList: [], totalNumArticles: 0}
        }

        const displayCursor = cursor.limit(articlesPerPage).skip(articlesPerPage * page)

        try {
            const articlesList = await displayCursor.toArray();
            const totalNumArticles = await articles.countDocuments(query);

            return { articlesList, totalNumArticles };
        } catch (e) {
            console.error(`Unable to convert cursor to array or problem counting documents, ${e}`)
            return { articlesList: [], totalNumArticles: 0 }
        }
    }

    //Getting article by id
    static async getArticleById(id){
        try {
            const pipeline = [
                {
                    $match: {
                        _id: new ObjectId(id),
                    },
                },
            ]

            return await articles.aggregate(pipeline).next()
        } catch(e) {
            console.error(`Something went wrong in getArticleById: ${e}`);
            throw e;
        }
    }       

    //Post new article
    static async addArticle(title, markdown, imgName, partner, date) {
        const dompurify = createDomPurify(new JSDOM().window); 
        
        const sanitizedMarkdown = dompurify.sanitize( marked(markdown) );

        try {
            const articleDoc = {
                title: title,
                markdown: sanitizedMarkdown,
                imgName: imgName,
                partner: partner, 
                date: date
            }

            return await articles.insertOne(articleDoc);
        } catch (e) {
            console.error(`Unable to post article: ${e}`);
            return { error: e};
        }
    }

    //Update article
    static async updateArticle(articleId, title, markdown, date) {
        try {
            const updateResponse = await articles.updateOne(
                { _id: ObjectId(articleId) },
                { $set: {title: title, markdown: markdown, date: date} },
            )

            return updateResponse;
        } catch (e) {
            console.error(`Unable to update article: ${e}`);
            return { error: e};
        }
    }

    //Delete article
    static async deleteArticle(articleId) {
        try {
            const deleteResponse = await articles.deleteOne(
                { _id: ObjectId(articleId) },
            )

            return deleteResponse;
        } catch (e) {
            console.error(`Unable to delete article: ${e}`);
            return { error: e};
        }
    }
}