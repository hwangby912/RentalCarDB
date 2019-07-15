var express = require('express');
var router = express.Router()

router.get('/', (req, res, next) => {
    if(req.session.userid) {
        req.session.destroy((err) => {
            res.redirect('/');
        });
    }
});

module.exports = router;