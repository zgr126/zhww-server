var express = require('express');
const { default: DB } = require('../utils/db.mts');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const client = await DB.connect()
  const res = await client.query('SELECT * FROM clients')
  console.log(res)
  client.release()
  
  res.send('respond with a resource');
});

router.post('/', function(req, res,next){
  console.log(req)
})

module.exports = router;
