var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', (req, res, next) => {
    
    let id;
    if(req.session.userid) {
        id = req.session.userid;
    }
    res.render('reservation', {
        loginState : req.session.loginState,
        id
        // loginID : req.session.userid,
        // loginPW : req.session.userpw,
        // loginName : req.session.name,
        // loginPhone : req.session.phone,
        // loginEmail : req.session.email,
    })
});

router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    }

    console.log(req.body);
    console.log('userid', req.session.userid);
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
        let sql = `insert into reservation (mno, cno, startDay, endDay, startTime, endTime)
                        values((select mno from member where id = '${req.session.userid}'),
                                '${req.body.carNum}', '${req.body.startDay}',
                                '${req.body.endDay}', '${req.body.startTime}',
                                '${req.body.endTime}')`;
        
        console.log(sql);
        con.query(sql, (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '차량번호를 선택해주세요. ';
                res.json(JSON.stringify(result));
            } else {
                if(rs) {
                    // console.log('rs : ', rs);
                    // result.txt = rs;
                    // res.json(JSON.stringify(result));

                    // con.query문 넣기
                    sql = `delete from car where cno = ${req.body.carNum}`;
                    console.log(sql);
                    con.query(sql, (err, rs, fields) => {
                        if(err) {
                            console.error(err.message);
                            result.txt = '차량 데이터 삭제가 안되었습니다. ';
                            res.json(JSON.stringify(result));
                        } else {
                            if(rs) {
                                console.log('delete rs : ', rs);
                                result.txt = rs;
                                res.json(JSON.stringify(result));
                            } else {
                                result.txt = '차량 삭제 안됨. ';
                                res.json(JSON.stringify(result));
                            }
                        }
                    });
                    // result.txt = rs;
                    // res.json(JSON.stringify(result));
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