var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', (req, res, next) => {
    
    let id;
    if(req.session.userid) {
        id = req.session.userid;
    }
    res.render('reservation', {
        loginState : req.session.loginState,
        id
        // loginID : req.session.userid,
        // loginPW : req.session.userpw,
        // loginName : req.session.name,
        // loginPhone : req.session.phone,
        // loginEmail : req.session.email,
    })
});

router.post('/', (req, res, next) => {
    // const result = {
    //     txt : ''
    // }

    // const con = mysql.createConnection({
    //     host : 'localhost',
    //     user : 'root',
    //     password : 'root',
    //     database : 'rentalcar'
    // });

    // con.connect((err) => {
    //     if(err) {
    //         return console.error(err.message);
    //     }


    // });
});

module.exports = router;