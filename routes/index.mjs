import express from "express";
const router = express();
import home from "./home.mjs";
import goods from "./goods.mjs";
import upload from "./upload.mjs";
import tag from "./tag.mjs";
import staticFile from "./static.mjs";
import resJSON from "../utils/resjson.mjs";

const handleRouter = express();
router.use(handleRouter);

handleRouter.use(resJSON);

handleRouter.use("/", home);
handleRouter.use("/goods", goods);
handleRouter.use("/upload", upload);
handleRouter.use("/tags", tag);

router.use(staticFile);
export default router;
