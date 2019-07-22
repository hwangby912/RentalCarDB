var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    }

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
        console.log('DB Connect: ', req.session.userid);
        // member table에서 user 삭제하는 sql query문
        const sql = 
        `delete from member where id = '${req.session.userid}'`;
        console.log(sql);

        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = 'err를 출력합니다. ';
                res.json(JSON.stringify(result));
                // query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우, session에 담겨 있는 값들을 초기화 시켜줌
                if(rs) {
                    console.log('rs : ', rs);
                    result.txt = rs;
                    // req.session.loginState = '';
                    // req.session.userid = '';
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '해당하는 userid가 없습니다. ';
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