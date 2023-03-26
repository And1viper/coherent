import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

import ArticlesDAO from "./dao/articlesDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 5000;

MongoClient.connect(
    process.env.BLOG_DB_URI,
    {
        wtimeoutMS: 2500,
        useNewUrlParser: true
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await ArticlesDAO.injectDB(client);

        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })