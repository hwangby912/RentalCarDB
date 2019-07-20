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
        const sql = 'select distinct location from car';
        
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '담당 전화를 부탁드립니다.  ';
                res.json(JSON.stringify(result));
            } else {
                if(rs) {
                    result.txt = rs;
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '지역을 선택해주세요. ';
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