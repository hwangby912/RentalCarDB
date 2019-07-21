var express = require('express');
var router = express.Router()

// get방식일 경우 수행
// session을 없애버림
router.get('/', (req, res, next) => {
    if(req.session.userid) {
        req.session.destroy((err) => {
            res.redirect('/');
        });
    }
});

module.exports = router;