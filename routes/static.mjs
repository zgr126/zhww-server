import express from "express";
const router = express.Router();
import path from "path";
const __dirname = path.resolve();

const staticRouter = path.join(__dirname, "public", "uploadFiles");
const html = path.join(__dirname, "public", "web");

router.use("/static", express.static(staticRouter));
// router.use(express.static(staticRouter2));
router.use("/web", express.static(html));
export default router;
