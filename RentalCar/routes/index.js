var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // let id;
  // if(req.session.userid) {
  //   id = req.session.userid;
  // }
  console.log(req.session.loginState);
  console.log(req.session.userid);
  res.render('index', {
    loginState: req.session.loginState,
    loginID: req.session.userid,
    // loginPW: req.session.userpw,
    // loginName : req.session.name,
    // loginPhone : req.session.phone,
    // loginEmail : req.session.email,
    // id
  });
});

module.exports = router;
