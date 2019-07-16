var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', (req, res, next) => {

    // let id;
    // if(req.session.userid) {
    //   id = req.session.userid;
    // }
    console.log(req.session.loginState);
    console.log(req.session.userid);
    res.render('signup', {
        // id
        loginState : req.session.loginState,
        loginID : req.session.userid,
        loginPW : req.session.userpw,
        loginName : req.session.name,
        loginPhone : req.session.phone,
        loginEmail : req.session.email,
    })
});

router.post('/', (req, res, next) => {
    req.session.userid = req.body.userid;
    req.session.userpw = req.body.userpw;
    req.session.name = req.body.name;
    req.session.phone = req.body.phone;
    req.session.email = req.body.email;

    const result = {
        txt : '회원 가입 오류'
    };

    const con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: 'root',
        database : 'rentalcar'
    });

    con.connect((err) => {
        if(err) {
            return console.error(err.message);
        }
        console.log('DB Connected', `${req.body.userid} : ${req.body.userpw} : ${req.body.name} : ${req.body.phone} : ${req.body.email}`);
        const sql = `insert into member(id, password, name, phone, email) values('${req.body.userid}', '${req.body.userpw}', '${req.body.name}', '${req.body.phone}', '${req.body.email}')`;
        console.log(sql);
        con.query(sql, (err, results, fields) => {
            if(err) {
                console.error(err.message);
                res.json(JSON.stringify(results));
            } else {
                console.log(results, fields);
                result.txt = `회원 가입을 축하드립니다. ${req.body.name}님`;
                res.json(JSON.stringify(result));
            }
            con.end((err) => {
                if(err) {
                    return console.error(err.message);
                }
            });
        });
    });
});

module.exports = router;