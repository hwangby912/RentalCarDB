var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// get방식일 경우 수행
router.get('/', (req, res, next) => {
    res.render('reservation', {
        loginState : req.session.loginState,
        loginID : req.session.userid,
    })
});

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    }

    console.log(req.body);
    console.log('userid', req.session.userid);
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
        // sql query문에 해당 reservation table에 등록하는 것
        let sql = `insert into reservation (mno, cno, startDay, endDay, startTime, endTime)
                        values((select mno from member where id = '${req.session.userid}'),
                                '${req.body.carNum}', '${req.body.startDay}',
                                '${req.body.endDay}', '${req.body.startTime}',
                                '${req.body.endTime}')`;
        
        console.log(sql);
        // query문 수행하는 곳
        con.query(sql, (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '차량번호를 선택해주세요. ';
                res.json(JSON.stringify(result));
                //  query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    // reservation table에 등록이 된 차량 정보를 car table에서 삭제하는 query
                    sql = `delete from car where cno = ${req.body.carNum}`;
                    console.log(sql);
                    //  query문이 정상일 경우 수행
                    con.query(sql, (err, rs, fields) => {
                        if(err) {
                            console.error(err.message);
                            result.txt = '차량 데이터 삭제가 안되었습니다. ';
                            res.json(JSON.stringify(result));
                        } else {
                            // query의 결과가 있는 경우
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
                } else {
                    result.txt = '예약할 수 있는 차량이 없습니다. ';
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