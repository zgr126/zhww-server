import express from 'express'
import db from './utils/db.mjs'
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors())

app.get('/', async (req, res) => {
  
  const clients = await db.query('SELECT * FROM clients')
  console.log(clients)
  db.release()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})