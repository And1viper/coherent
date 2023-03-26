import express from "express";
import ArticlesCtrl from "./articles.contoller.js";
import multer from "multer";

import LoginCtrl from "./login.contorller.js";


//For Images
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "client/public/blog-images");
        callback(null, "client/build/blog-images");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

const router = express.Router();

router.route("/").get(ArticlesCtrl.apiGetArticles);
router.route("/id/:id").get(ArticlesCtrl.apiGetArticleById);

router
    .route("/manage")
    .post(upload.single("articleImage"), ArticlesCtrl.apiPostArticle)
    .put(ArticlesCtrl.apiUpdateArticle)
    .delete(ArticlesCtrl.apiDeleteArticle)

//Login
router.route("/login").post(LoginCtrl.checkToken);

export default router