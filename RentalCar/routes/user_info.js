var express = require('express');
var router = express.Router();

// get방식일 경우 수행
router.get('/', (req, res, next) => {
    console.log(req.session.loginState);
    console.log(req.session.userid);
    res.render('user_info', {
        loginState : req.session.loginState,
        loginID : req.session.userid,
    })
});

module.exports = router;
