import ArticlesDAO from "../dao/articlesDAO.js";

export default class ArticlesCtrl {

    //Getting list of articles
    static async apiGetArticles (req, res, next) {
        const articlesPerPage = req.query.articlesPerPage ? parseInt(req.query.articlesPerPage, 10) : 100;
        const page = req.query.page ? parseInt(req.query.page, 10) : 0;

        const { articlesList, totalNumArticles} = await ArticlesDAO.getArticles({ page, articlesPerPage });

        let response = {
            articles: articlesList,
            page: page,
            entries_per_page: articlesPerPage,
            total_results: totalNumArticles,
        }
        res.json(response);
    }

    //Geting article by id
    static async apiGetArticleById (req, res, next) {
        try {
            let id = req.params.id || {};
            let article = await ArticlesDAO.getArticleById(id);
            
            if(!article) {
                res.status(404).json({error: "Not Found"});
                return
            }
            res.json(article)
        } catch(e) {
            console.log(`api, ${e}`);
            res.status(500).json({error: e})
        }
    }

    //Post new article
    static async apiPostArticle (req, res, next) {
        try {
            const title = req.body.title
            const markdown = req.body.markdown;
            const articleImg = req.file.originalname;
            const partner = req.body.partner;
            const dateRaw = new Date(Date.now());
            const date = dateRaw.toLocaleDateString();


            const articleResponse = await ArticlesDAO.addArticle(
                title,
                markdown,
                articleImg,
                partner,
                date,
            )

            res.json( {status: "success"} );
        } catch (e) {
            res.status(500).json({ error: e.message});
        }
    }

    //Update article
    static async apiUpdateArticle (req, res, next) {
        try {
            const articleId = req.body.article_id;
            const title = req.body.title
            const markdown = req.body.markdown;
            const date = Date.now();

            const articleResponse = await ArticlesDAO.updateArticle(
                articleId,
                title,
                markdown,
                date,
            )

            res.json( {status: "success"} );
        } catch (e) {
            res.status(500).json({ error: e.message});
        }
    }

    //Delete article
    static async apiDeleteArticle (req, res, next) {
        try {
            const articleId = req.query.id;

            const articleResponse = await ArticlesDAO.deleteArticle(
                articleId
            )

            res.json( {status: "success"} );
        } catch (e) {
            res.status(500).json({ error: e.message});
        }
    }

}