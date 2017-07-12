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
    user_model.CreateUser(user)
      .then(function (result) {
        res.json({
          Data: [],
          Message: "Signup Successfully!",
          Status: "success"
        });
      }).error(function (error) {
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
router.post('/signin', function (req, res, next) {
  var user = req.body;
  var email = user.email;
  var password = user.password;
  if (email && password) {
    user_model.GetUserByEmail(user)
      .then(function (result) {
        console.log(result)
        res.json({
          Data: [],
          Message: "Login Successfully!",
          Status: "success"
        });
      }).error(function (error) {
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
