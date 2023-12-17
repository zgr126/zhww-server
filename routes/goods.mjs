import express from 'express'
import DB from '../utils/db.mjs'
// import multipart from 'connect-multiparty';
// var multipartMiddleware = multipart()
const router = express.Router()
import multer from 'multer';
const upload = multer({dest: 'uploadFiles/'})

class goods {
  url;
  name;
  constructor(url,name){
    this.url = url
    this.name = name
  }
}

router.get('/', async (req, res, next) => {
  const clients = await DB.query('SELECT * FROM public.goods')
  res.data = clients.rows
  next()
})

router.post('/', upload.any(),async (req, res, next) => {
  console.log(req.file)
  console.log(req.body)
  // const clients = await DB.query('INSERT  * FROM public.goods')
  // res.data = clients.rows
  next()
})

export default router
