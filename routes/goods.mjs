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
  let query = req.query.search;
  console.log(query);
  try {
    let err, data;
    if (query) {
      err,
        (data = await DB.collection("goods")
          .find({
            $or: [{ name: { $regex: new RegExp(query) } }, { tags: query }],
          })
          .toArray());
    } else {
      err, (data = await DB.collection("goods").find().toArray());
    }

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
  let id = new ObjectId(req.body._id);
  let _data = req.body;
  delete _data._id;
  let err,
    data = await DB.collection("goods").replaceOne({ _id: id }, _data);
  res.push(data);
  next();
});

router.delete("/", async (req, res, next) => {
  console.log(req.body);
  console.log({ _id: req.body._id });
  let err,
    data = await DB.collection("goods").deleteOne({
      _id: new ObjectId(req.body._id),
    });
  console.log(data);
  res.push(data);
  next();
});

export default router;
