var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({'test':'aaaaaaaaaaaa'});
});
router.post('/signup', function(req, res, next) {
  console.log(res)
});

module.exports = router;
