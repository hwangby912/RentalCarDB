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
        const sql = 
        `update member set password = '${req.body.userPW}',
                            name = '${req.body.userName}',
                            phone = '${req.body.userPhone}',
                            email = '${req.body.userEmail}'
                        where id = '${req.session.userid}'`;
        // console.log(sql);
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = 'error 출력 ';
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
        });
    });
    // result.txt = req.body;
    // res.json(JSON.stringify(result));
});

module.exports = router;