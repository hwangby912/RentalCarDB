var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// get방식일 경우 수행
router.get('/', (req, res, next) => {
    // login.ejs를 띄우는데 
    // loginState와 loginID 값을 전달시킴
    res.render('login', {
        loginState : req.session.loginState,
        loginID: req.session.userid,
    });
});

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    };

    // 연결 생성
    const con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'rentalcar'
    });

    // 연결
    con.connect((err) => {
        if(err) {
            return console.error(err.message);
        }
        console.log('DB Connect: ', req.body.userid);
        // sql query문에 해당
        const sql = 
        `select * from member where id = '${req.body.userid}' and password = '${req.body.userpw}'`;
        console.log(sql);
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '다시 로그인해주세요. ';
                res.json(JSON.stringify(result));
                //  query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs[0] && rs[0].name) {
                    console.log('rs[0] : ', rs[0]);
                    req.session.loginState = true;
                    req.session.userid = req.body.userid;
                    res.redirect('/');
                // query의 결과가 없는 경우
                } else {
                    result.txt = '다시 로그인해주세요. ';
                    res.json(JSON.stringify(result));
                }
            }
            // 연결 종료
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