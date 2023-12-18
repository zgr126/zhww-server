import express from "express";
import cors from "cors";
import router from "./routes/index.mjs";
import path from "path";
const __dirname = path.resolve();
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(router);


const staticRouter2 = path.join(__dirname, "public");
app.use(express.static(staticRouter2));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
