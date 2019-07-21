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
        // sql query문에 해당 지역이 중복되는 경우 하나로 출력하기 위함
        const sql = 'select distinct location from car';
        
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '담당 전화를 부탁드립니다.  ';
                res.json(JSON.stringify(result));
                // query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    result.txt = rs;
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '지역을 선택해주세요. ';
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