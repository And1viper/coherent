import express from "express";
import ContactCtrl from "./contact.conroller.js";

const router = express.Router();

router.route("/").post(ContactCtrl.apiSendEmail);


export default router