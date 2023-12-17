import express from 'express'
const router = express.Router()
import home from './home.mjs'
import goods from './goods.mjs'
router.use('/', home)
router.use('/goods', goods)
export default router