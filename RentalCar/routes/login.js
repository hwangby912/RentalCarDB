var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', (req, res, next) => {

    let id;
    if(req.session.userid) {
      id = req.session.userid;
    }
    console.log(req.sessionID);
    console.log('login', req.session.loginState);
    console.log(req.session.userid);
    res.render('login', {
        loginState : req.session.loginState,
        id
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
        `select * from member where id = ?`;
        console.log(sql);
        con.query(sql, [req.body.userid], (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '다시 로그인해주세요. ';
                res.json(JSON.stringify(result));
            } else {
                if(rs[0] && rs[0].name) {
                    console.log('rs[0] : ', rs[0]);
                    console.log('rs[0].name : ',rs[0].name);
                    req.session.loginState = true;
                    req.session.userid = req.body.userid;
                    req.session.name = rs[0].name;
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