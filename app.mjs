import express from "express";
import db from "./utils/db.mjs";
import cors from "cors";
import resJSON from "./utils/resjson.mjs";
import router from "./routes/index.mjs";
import path from "path";
const __dirname = path.resolve();
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(router);
app.use(resJSON);

const staticRouter2 = path.join(__dirname, "public");
app.use(express.static(staticRouter2));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
