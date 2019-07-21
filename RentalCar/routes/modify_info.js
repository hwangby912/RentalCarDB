var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

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
        // sql query문에 해당, userid를 조건으로 하여, password, name, phone, email의 값을 수정함
        const sql = 
        `update member set password = '${req.body.userPW}',
                            name = '${req.body.userName}',
                            phone = '${req.body.userPhone}',
                            email = '${req.body.userEmail}'
                        where id = '${req.session.userid}'`;
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = 'error 출력 ';
                res.json(JSON.stringify(result));
                //  query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    console.log('rs : ', rs);
                    result.txt = rs;
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