var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.loginState);
  console.log(req.session.userid);
  // signup.ejs를 띄우는데 
  // loginState와 loginID 값을 전달시킴
  res.render('index', {
    loginState: req.session.loginState,
    loginID: req.session.userid,
  });
});

module.exports = router;
