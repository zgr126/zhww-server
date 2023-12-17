import express from 'express'
import DB from '../utils/db.mjs'
const router = express.Router()
router.get('/', async (req, res, next) => {
    console.log('ss')
    const clients = await DB.query('SELECT * FROM public.user')
    console.log(clients.rows)
    res.data = clients.rows
    next()
  })
export default router