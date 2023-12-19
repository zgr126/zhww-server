import pkg from "pg";
const { Pool } = pkg;
const connectDb = async () => {
  try {
    const pool = new Pool({
      user: "postgres",
      host: "101.43.2.137",
      database: "zhww",
      password: "aw3se4aw3se4",
      port: 5432,
    });
    const client = await pool.connect();
    // const res = await pool.query('SELECT * FROM user')
    // console.log(res)
    // await pool.end()
    client.on("error", async (e) => {
      console.log(e);
      client = await pool.connect();
    });
    return client;
  } catch (error) {
    console.log(error);
  }
};
let DB = await connectDb();
export default DB;
