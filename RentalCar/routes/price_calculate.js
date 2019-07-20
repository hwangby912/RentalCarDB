var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post('/', (req, res, next) => {
    result = {
        txt : ''
    }

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
        console.log(req.body.carLocation);
        const sql = `select price from car where cno = '${req.body.carNum}'`;
        console.log(sql);
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = 'error를 출력합니다. ';
                res.json(JSON.stringify(result));
            } else {
                if(rs) {
                    // console.log('rs : ', rs);
                    result.txt = rs;
                    res.json(JSON.stringify(result));

                    // con.query문 넣기
                } else {
                    result.txt = '예약을 할 수 없는 차이거나 날짜를 입력해주세요. ';
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


    // console.log(req.body);
    // res.json(JSON.stringify(result));
});

module.exports = router;