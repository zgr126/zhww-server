import express from "express";
const router = express.Router();
import path from "path";
const __dirname = path.resolve();

const staticRouter = path.join(__dirname, "public", "uploadFiles");
const staticRouter2 = path.join(__dirname, "public");
console.log(staticRouter);
router.use("/static", express.static(staticRouter));
// router.use(express.static(staticRouter2));
export default router;
