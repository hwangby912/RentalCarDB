var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    result = {
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
        console.log(req.body.carLocation);
        // sql query문에 해당, 차량 번호에 따른 가격을 읽음
        const sql = `select price from car where cno = '${req.body.carNum}'`;
        console.log(sql);
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = 'error를 출력합니다. ';
                res.json(JSON.stringify(result));
                //  query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    result.txt = rs;
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '예약을 할 수 없는 차이거나 날짜를 입력해주세요. ';
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