import express from "express";
import DB from "../utils/db.mjs";
import { ObjectId } from "mongodb";
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
      data = await DB.collection("tags").find().toArray();
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
    data = await DB.collection("tags").insertOne(req.body);
  res.push(data);
  next();
});

router.delete("/", async (req, res, next) => {
  console.log(req.body);
  console.log({ _id: req.body._id });
  let err,
    data = await DB.collection("tags").deleteOne({
      _id: new ObjectId(req.body._id),
    });
  console.log(data);
  res.push(data);
  next();
});

export default router;
