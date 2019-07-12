var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    
    let id;
    if(req.session.userid) {
        id = req.session.userid;
    }
    res.render('exchange', {
        loginState : req.session.loginState,
        id
        // loginID : req.session.userid,
        // loginPW : req.session.userpw,
        // loginName : req.session.name,
        // loginPhone : req.session.phone,
        // loginEmail : req.session.email,
    })
});

module.exports = router;