import express from "express";
import DB from "../utils/db.mjs";
// import multipart from 'connect-multiparty';
// var multipartMiddleware = multipart()
const router = express.Router();
class goods {
  url;
  name;
  constructor(url, name) {
    this.url = url;
    this.name = name;
  }
}

router.get("/", async (req, res, next) => {
  const clients = await DB.query("SELECT * FROM public.goods");
  res.data = clients.rows;
  next();
});

router.post("/", async (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  next();
});

export default router;
