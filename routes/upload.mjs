import express from "express";
import DB from "../utils/db.mjs";
// import multipart from 'connect-multiparty';
// var multipartMiddleware = multipart()
const router = express.Router();
import multer from "multer";
const storage = multer.diskStorage({
  //保存路径
  destination: function (req, file, cb) {
    cb(null, "public/uploadFiles");
    //注意这里的文件路径,不是相对路径，直接填写从项目根路径开始写就行了
  },
  //保存在 destination 中的文件名
  filename: function (req, file, cb) {
    console.log(file);
    cb(
      null,
      generateRandomString(8) +
        "-" +
        Date.now() +
        file.originalname.slice(file.originalname.indexOf("."))
    );
  },
});
const fileFilter = (req, file, callback) => {
  // 解决中文名乱码的问题 latin1 是一种编码格式
  file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8");
  callback(null, true);
};

function generateRandomString(length) {
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 可选的字符集合
  var randomChars = Array.apply(null, new Array(length))
    .map(() => characters[Math.floor(Math.random() * characters.length)])
    .join(""); // 根据字符集合生成指定长度的随机字符串
  return randomChars;
}
const upload = multer({ storage: storage, fileFilter: fileFilter });
router.post("/", upload.single("file"), async (req, res, next) => {
  console.log(req.file);
  let data = {
    url: req.file.filename,
    createTime: new Date().getTime(),
    name: req.file.originalname.slice(0, req.file.originalname.indexOf(".")),
  };
  let _data = await DB.collection("tags").find().toArray();
  console.log("tags:", _data);
  let tags = _data.map((e) => {
    if (data.name.indexOf(e.tag) != -1) {
      return e.tag;
    }
  });
  if (tags.length != 0) {
    data.tags = tags;
  }
  let err,
    result = await DB.collection("goods").insertOne(data);
  res.push(result);
  // const now = new Date().getTime();
  // const sql = `INSERT INTO goods(url,createTime,name) VALUES('${
  //   req.file.filename
  // }',to_timestamp(${Date.now()} / 1000.0),'${req.file.originalname.slice(
  //   0,
  //   req.file.originalname.indexOf(".")
  // )}') RETURNING *;`;
  // console.log(sql);

  // try {
  //   const clients = await DB.query(sql);
  //   console.log(clients);
  //   res.data = clients.rows;
  // } catch (err) {
  //   res.err = err;
  //   console.log(err);
  // }

  next();
});

export default router;
