const { Pool } = require("pg");

const connectDb = async () => {
    try {
        const pool = new Pool({
            user: postgres,
            host: '101.43.2.137',
            database: zhww,
            password: 'aw3se4AW#SE$',
            port: 5432,
        });
        await pool.connect()
        const res = await pool.query('SELECT * FROM clients')
        console.log(res)
        await pool.end()
        return pool
        
    } catch (error) {
        console.log(error)
    }
}
connectDb()