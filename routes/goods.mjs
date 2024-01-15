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
  try {
    let err,
      data = await DB.collection("goods").find().toArray();
    console.log(err);
    console.log(data);
    res.push(data);
    next();
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  let err,
    data = await DB.collection("goods").find().toArray();
  res.push(data);
  next();
});

router.put("/", async (req, res, next) => {
  console.log("put:", req.body);
  let _data = req.body;
  let err,
    data = await DB.collection("goods").replaceOne({ _id: _data._id }, _data);
  res.push(data);
  next();
});

export default router;
