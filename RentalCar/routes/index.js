var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let id;
  if(req.session.userid) {
    id = req.session.userid;
  }
  res.render('index', {
    loginState: req.session.loginState,
    id
    // loginID: req.session.userid,
    // loginPW: req.session.userpw,
    // loginName : req.session.name,
    // loginEmail : req.session.email,
    // loginPhone : req.session.phone,
  });
});

module.exports = router;
