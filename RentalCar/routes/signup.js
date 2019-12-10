var express = require("express");
var router = express.Router();
var mysql = require("mysql"); // mysql driver 등록

// get방식일 경우 수행
router.get("/", (req, res, next) => {
  console.log(req.session.loginState);
  console.log(req.session.userid);
  // signup.ejs를 띄우는데
  // loginState와 loginID 값을 전달시킴
  res.render("signup", {
    loginState: req.session.loginState,
    loginID: req.session.userid
  });
});

// post방식일 경우 수행
router.post("/", (req, res, next) => {
  // 입력된 값들을 session 값에 저장
  req.session.userid = req.body.userid;
  req.session.userpw = req.body.userpw;
  req.session.name = req.body.name;
  req.session.phone = req.body.phone;
  req.session.email = req.body.email;

  const result = {
    txt: "회원 가입 오류"
  };

  // 연결 생성
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "rentalcar"
  });

  // 연결
  con.connect(err => {
    if (err) {
      return console.error(err.message);
    }
    console.log(
      "DB Connected",
      `${req.body.userid} : ${req.body.userpw} : ${req.body.name} : ${req.body.phone} : ${req.body.email}`
    );
    // sql query문에 해당함
    const sql = `insert into member(id, password, name, phone, email) values('${req.body.userid}', '${req.body.userpw}', '${req.body.name}', '${req.body.phone}', '${req.body.email}')`;
    console.log(sql);
    // query문 수행하는 곳
    con.query(sql, (err, results, fields) => {
      if (err) {
        console.error(err.message);
        res.json(JSON.stringify(results));
        //  query문이 정상일 경우 수행
      } else {
        console.log(results, fields);
        result.txt = `회원 가입을 축하드립니다. ${req.body.name}님`;
        res.json(JSON.stringify(result));
      }
      // 연결 종료
      con.end(err => {
        if (err) {
          return console.error(err.message);
        }
      });
    });
  });
});

module.exports = router;
