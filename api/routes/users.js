var express = require('express');
var router = express.Router();
var config = require("config");
var user_model = require("../model/user_model")
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/signup', function (req, res, next) {
  
  var user = req.body;
  var email = user.email;
  var password = user.password;
  if (email && password) {
    console.log(req.body)
    user_model.CreateUser(user)
      .then(function (result) {
        console.result;
      }).error(function(error){
        console.log(error);
      });
  } else {
    res.json({
      Data: [],
      Message: "Email and Password is required!",
      Status: "error"
    });
  }
});
module.exports = router;
