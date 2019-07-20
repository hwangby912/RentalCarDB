var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post('/', (req, res, next) => {
    const result = {
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
        console.log('DB Connect: ', req.session.userid);
        const sql = 
        `delete from member where id = '${req.session.userid}'`;
        console.log(sql);
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = 'err를 출력합니다. ';
                res.json(JSON.stringify(result));
            } else {
                if(rs) {
                    console.log('rs : ', rs);
                    result.txt = rs;
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '해당하는 userid가 없습니다. ';
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









    // console.log(req.session.userid);
});

module.exports = router;