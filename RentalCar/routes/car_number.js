var express = require("express");
var router = express.Router();
var mysql = require("mysql"); //mysql driver 등록

// post방식일 경우 수행
router.post("/", (req, res, next) => {
  const result = {
    txt: ""
  };

  // 연결 생성
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "rentalcar"
  });

  // 연결
  con.connect(err => {
    if (err) {
      return console.error(err.message);
    }
    console.log(req.body.carLocation);
    // sql query문에 해당, 지역과 차량 이름에 따른 차량 번호를 나타냄(중복 없음 primary key이기 때문)
    const sql = `select cno from car where location = '${req.body.carLocation}' and car_name = '${req.body.carName}'`;
    console.log(sql);
    // query문 수행하는 곳
    con.query(sql, "", (err, rs, fields) => {
      if (err) {
        console.error(err.message);
        result.txt = "차량번호를 선택해주세요. ";
        res.json(JSON.stringify(result));
        // query문이 정상일 경우 수행
      } else {
        // query의 결과가 있는 경우
        if (rs) {
          result.txt = rs;
          res.json(JSON.stringify(result));
        } else {
          result.txt = "예약할 수 있는 차량이 없습니다. ";
          res.json(JSON.stringify(result));
        }
      }
      // 연결 종료
      con.end(err => {
        if (err) {
          return console.error(err.message);
        }
        console.log("con close");
      });
    });
  });
});

module.exports = router;
