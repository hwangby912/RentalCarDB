var express = require('express');
var router = express.Router();
var mysql = require('mysql');

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
        console.log(req.body.carLocation);
        const sql = `select car_name from car where location = '${req.body.carLocation}'`;
        console.log(sql);
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '차량을 선택해주세요. ';
                res.json(JSON.stringify(result));
            } else {
                if(rs) {
                    // console.log('rs : ', rs);
                    result.txt = rs;
                    res.json(JSON.stringify(result));

                    // con.query문 넣기
                } else {
                    result.txt = '예약할 수 있는 차량이 없습니다. ';
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