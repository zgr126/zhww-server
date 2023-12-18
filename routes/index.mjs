import express from "express";
const router = express.Router();
import home from "./home.mjs";
import goods from "./goods.mjs";
import upload from "./upload.mjs";
import staticFile from "./static.mjs";

router.use("/", home);
router.use("/goods", goods);
router.use("/upload", upload);
router.use("/static", staticFile);
export default router;
