import express from 'express'
import db from './utils/db.mjs'
import cors from 'cors'
import resJSON from './utils/resjson.mjs'
import router from './routes/index.mjs'
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(router)
app.use(resJSON)

// router(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})