var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', (req, res, next) => {

    // let id;
    // if(req.session.userid) {
    //   id = req.session.userid;
    // }
    res.render('login', {
        loginState : req.session.loginState,
        loginID: req.session.userid,
        // loginPW: req.session.userpw,
        // loginName : req.session.name,
        // loginEmail : req.session.email,
        // loginPhone : req.session.phone,
        // id,
    });
});

router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    };

    const con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'rentalcar'
    });

    con.connect((err) => {
        if(err) {
            return console.error(err.message);
        }
        console.log('DB Connect: ', req.body.userid);
        const sql = 
        `select * from member where id = '${req.body.userid}' and password = '${req.body.userpw}'`;
        console.log(sql);
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '다시 로그인해주세요. ';
                res.json(JSON.stringify(result));
            } else {
                if(rs[0] && rs[0].name) {
                    console.log('rs[0] : ', rs[0]);
                    // console.log('rs[0].name : ',rs[0].name);
                    req.session.loginState = true;
                    req.session.userid = req.body.userid;
                    // req.session.name = rs[0].name;
                    res.redirect('/');
                } else {
                    result.txt = '다시 로그인해주세요. ';
                    res.json(JSON.stringify(result));
                }
            }
            con.end((err) => {
                if(err) {
                    return console.error(err.message);
                }
                console.log('con close');
            });
        });
    });
});

module.exports = router;