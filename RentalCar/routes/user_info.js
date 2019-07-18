var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    // let id;
    // if(req.session.userid) {
    //   id = req.session.userid;
    // }
    console.log(req.session.loginState);
    console.log(req.session.userid);
    res.render('user_info', {
        loginState : req.session.loginState,
        loginID : req.session.userid,
        // loginPW : req.session.userpw,
        // loginName : req.session.name,
        // loginPhone : req.session.phone,
        // loginEmail : req.session.email,
        // id,
    })
});

module.exports = router;
