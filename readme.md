# # RentalCar Project

app.js

```javascript
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var app = express();

// view engine setup
// 기본 path를 rentalCar/views로 지정함
// view의 engine은 ejs로 설정함
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('2nd project'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  resave: false,
  saveUninitialized: false,  // session의 내용 변경이 없더라도 저장을 할것인가?
  secret: '2nd project', // 필수적으로 넣어야하며, 위의 cookieParser의 인자와 같은 값을 넣어야함
  cookie: {
    httpOnly: true,
    secure: false
  }
}));

// localhost:3000/'첫번째인자'가 url로 들어온다면
// require안의 인자로 routing을 시켜줌 
app.use('/', require('./routes/index'));
app.use('/signup', require('./routes/signup'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));
app.use('/reservation', require('./routes/reservation'));
app.use('/car_name', require('./routes/car_name'));
app.use('/car_location', require('./routes/car_location'));
app.use('/car_number', require('./routes/car_number'));
app.use('/user_info', require('./routes/user_info'));
app.use('/user_info_check', require('./routes/user_info_check'));
app.use('/modify_info', require('./routes/modify_info'));
app.use('/delete_user', require('./routes/delete_user'));
app.use('/price_calculate', require('./routes/price_calculate'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

```

index.ejs

```ejs
<!DOCTYPE HTML>
<!--
	Typify by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>Typify by TEMPLATED</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="stylesheets/main.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src = 'javascripts/listener.js'></script>
		<script src="javascripts/skel.min.js"></script>
		<script src="javascripts/util.js"></script>
		<script src="javascripts/main.js"></script>
	</head>
	<body>
		<div>
		<%
			if(loginState) {
		%>
		<!-- 로그인이 된 경우 -->
					<button id = 'logoutBtn'>LOG OUT</button>
					<a href = '/user_info'><button>My Page</button></a>
					<button id = 'loginToolbar'><%= loginID %>님 환영합니다. </button>
					<h2>Welcome To CarChain</h2>
		<%
			} else {
		%>
		<!-- 로그인이 안된 경우 -->
				<div>
					<h2 style = 'margin-top: 2em'>Welcome To CarChain</h2>
				</div>
		<%
			}
		%>
		</div>
		<!-- menu 보여 주는 곳 -->
		<section id = "menu" class = 'wrapper special'>
			<div>
				<a href = '/'><button>HOME</button></a>
				<a href = '/signup'><button>SIGN UP</button></a>
				<a href = '/login'><button>LOGIN</button></a>
				<a href = '/reservation'><button>RESERVATION</button></a>
			</div>
		</section>

		<%
			if(!loginState) {
		%>
				<section class = "wrapper style2 special">
					<div class = "inner narrow">
						<span>회원 가입 or 로그인을 하시기 바랍니다. </span>
					</div>
				</section>
		<%
			}
		%>
		<!-- Footer -->
		<footer id = "footer">
			<div class = "copyright">
			&copy; Untitled. Design: <a href = "http://templated.co/">TEMPLATED</a>.
			</div>
		</footer>
	</body>
</html>
```

signup.ejs

```ejs
<!DOCTYPE html>
<html>
    <head>
        <title>Typify by TEMPLATED</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="stylesheets/main.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src = 'javascripts/listener.js'></script>
        <script src="javascripts/skel.min.js"></script>
        <script src="javascripts/util.js"></script>
        <script src="javascripts/main.js"></script>
    </head>

    <body>
        <%
			if(loginState) {
        %>
        <!-- 로그인이 된 경우 -->
                <div>
                    <button id = 'logoutBtn'>LOG OUT</button>
                    <a href = '/user_info'><button>My Page</button></a>
                    <button id = 'loginToolbar'><%= loginID %>님 환영합니다. </button>
                    <h2>SIGN UP PAGE</h2>
                </div>
		<%
			} else {
        %>
        <!-- 로그인이 안된 경우 -->
                <div>
                    <h2 style = 'margin-top: 2em'>Welcome To CarChain</h2>
                </div>
        <%
            }
        %>
        <!-- menu 보여 주는 곳 -->
        <section id = "menu" class = 'wrapper special'>
            <div>
                <a href = '/'><button>HOME</button></a>
                <a href = '/signup'><button>SIGN UP</button></a>
                <a href = '/login'><button>LOGIN</button></a>
                <a href = '/reservation'><button>RESERVATION</button></a>
            </div>
        </section>
        <!-- 회원가입을 하는 공간 -->
        <section id = "signupSection" class = "wrapper style2 special">
            <div class = "inner narrow">
                <%
                    if(loginState) {
                %>
                <!-- 로그인이 되있는 경우이기에 Logout을 하라는 공간 -->
                <span>좌측 상단의 Log Out 버튼을 눌러주세요. </span>
                <%
                    } else {
                %>
                <!-- 로그인이 안되있는 경우이기에 회원가입을 하라는 공간 -->
                <header>
                    <h2>REGISTER PAGE</h2>
                </header>
                <div class = "grid-form">
                    <div class = "form-control narrow">
                        <label for = "id">ID</label>
                        <input name = "id" id = "signupID" type = "text">
                    </div>
                    <div class = "form-control narrow">
                        <label for = "password">password</label>
                        <input name = "password" id = "signupPW" type = "password">
                    </div>
                    <div class = "form-control narrow">
                        <label for = "name">name</label>
                        <input name = "name" id = "signupName" type = "text">
                    </div>
                    <div class = "form-control narrow">
                        <label for = "phone">phone</label>
                        <input name = "phone" id = "signupPhone" type = "text">
                    </div>
                    <div class = "form-control">
                        <label for = "email">email</label>
                        <input name = "email" id = "signupEmail" type = "email">
                    </div>
                        
                    <ul class = "actions">
                        <li><input value = "SIGN UP" type = "submit" id = 'signupBtn'></li>
                    </ul>
                </div>
                <%
                    }
                %>
            </div>
        </section>

        <!-- Footer -->
		<footer id = "footer">
            <div class = "copyright">
            &copy; Untitled. Design: <a href = "http://templated.co/">TEMPLATED</a>.
            </div>
        </footer>
    </body>
</html>
```

login.ejs

```ejs
<!DOCTYPE html>
<html>
    <head>
        <title>Typify by TEMPLATED</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="stylesheets/main.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src = 'javascripts/listener.js'></script>
        <script src="javascripts/skel.min.js"></script>
        <script src="javascripts/util.js"></script>
        <script src="javascripts/main.js"></script>
    </head>

    <body>
        <%
			if(loginState) {
        %>
        <!-- 로그인이 된 경우 -->
                <div>
                    <button id = 'logoutBtn'>LOG OUT</button>
                    <a href = '/user_info'><button>My Page</button></a>
                    <button id = 'loginToolbar'><%= loginID %>님 환영합니다. </button>
                    <h2>LOGIN PAGE</h2>
                </div>
		<%
			} else {
        %>
        <!-- 로그인이 안된 경우 -->
                <div>
                    <h2 style = 'margin-top: 2em'>Welcome To CarChain</h2>
                </div>
        <%
            }
        %>
        <!-- menu 보여 주는 곳 -->
        <section id = "menu" class = 'wrapper special'>
            <div>
                <a href = '/'><button>HOME</button></a>
                <a href = '/signup'><button>SIGN UP</button></a>
                <a href = '/login'><button>LOGIN</button></a>
                <a href = '/reservation'><button>RESERVATION</button></a>
            </div>
        </section>
        <!-- 로그인을 하는 공간 -->
        <section id = "loginSection" class = "wrapper style2 special">
            <div class = "inner narrow">
                <%
                    if(loginState) {        
                %>
                <!-- 로그인이 되있는 경우이기에 Logout을 하라는 공간 -->
                <span>좌측 상단의 Log Out 버튼을 눌러주세요. </span>
                <%    
                    } else {
                %>
                <!-- 로그인이 안되있는 경우이기에 로그인을 하라는 공간 -->
                <header>
                    <h2>LOGIN PAGE</h2>
                </header>
                <div class = "grid-form">
                    <div class = "form-control narrow">
                        <label for = "id">ID</label>
                        <input name = "id" id = "loginID" type = "text">
                    </div>
                    <div class = "form-control narrow">
                        <label for = "password">password</label>
                        <input name = "password" id = "loginPW" type = "password">
                    </div>
                    <ul class = "actions">
                        <li><input value = "LOGIN" type = "submit" id = 'loginBtn'></li>
                    </ul>
                </div>
                <%
                    }
                %>
                
            </div>
        </section>
        
        <!-- Footer -->
        <footer id = "footer">
            <div class = "copyright">
            &copy; Untitled. Design: <a href = "http://templated.co/">TEMPLATED</a>.
            </div>
        </footer>
    </body>
</html>
```

reservation.ejs

```ejs
<!DOCTYPE html>
<html>
    <head>
        <title>Typify by TEMPLATED</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="stylesheets/main.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src = 'javascripts/listener.js'></script>
		<script src="javascripts/skel.min.js"></script>
		<script src="javascripts/util.js"></script>
		<script src="javascripts/main.js"></script>
    </head>

    <body>
        <%
			if(loginState) {
		%>
		<!-- 로그인이 된 경우 -->
				<div>
					<button id = 'logoutBtn'>LOG OUT</button>
					<a href = '/user_info'><button>My Page</button></a>
					<button id = 'loginToolbar'><%= loginID %>님 환영합니다. </button>
					<h2>RESERVATION PAGE</h2>
        		</div>
		<%
			} else {
		%>
		<!-- 로그인이 안된 경우 -->
				<div>
						<h2 style = 'margin-top: 2em'>Welcome To CarChain</h2>
				</div>
		<%
			}
		%>
		<!-- menu 보여 주는 곳 -->
        <section id = "menu" class = 'wrapper special'>
            <div>
				<a href = '/'><button>HOME</button></a>
				<a href = '/signup'><button>SIGN UP</button></a>
				<a href = '/login'><button>LOGIN</button></a>
				<a href = '/reservation'><button>RESERVATION</button></a>
            </div>
		</section>
		<!-- 예약을 하는 공간 -->
		<%
			if(loginState) {
		%>
		<!-- 로그인이 된 경우 -->
				<div id = 'registerDiv'>
					<h3>렌터카 영업소 선택</h3>
					픽업<br />
					<!-- 차량의 지역. 챠량 이름, 차량 번호를 선택하는 곳 -->
					<select id = 'carLocation'>
						<option value = '' selected = 'selected'>지역을 선택해주세요. </option>
					</select>
					<select id = 'carName'>
						<option value = '' selected = 'selected'>차량을 선택해주세요. </option>
					</select>
					<select id = 'carNum'>
						<option value = '' selected = 'selected'>차량번호를 선택해주세요. </option>
					</select>
					<!-- 예약 날짜와 시간을 정하는 곳 -->
					<div id = 'startReg'>
						<span>픽업 날짜</span> <br />
						<input value = '시작일' type = 'date' id = 'startDay' class = 'calendar'><br />
						<select id = 'startTime'>
							<option value = '' selected = 'selected'>시간을 정해주세요. </option>
							<option value = '00:00'>00:00</option>
							<option value = '00:30'>00:30</option>
							<option value = '01:00'>01:00</option>
							<option value = '01:30'>01:30</option>
							<option value = '02:00'>02:00</option>
							<option value = '02:30'>02:30</option>
							<option value = '03:00'>03:00</option>
							<option value = '03:30'>03:30</option>
							<option value = '04:00'>04:00</option>
							<option value = '04:30'>04:30</option>
							<option value = '05:00'>05:00</option>
							<option value = '05:30'>05:30</option>
							<option value = '06:00'>06:00</option>
							<option value = '06:30'>06:30</option>
							<option value = '07:00'>07:00</option>
							<option value = '07:30'>07:30</option>
							<option value = '08:00'>08:00</option>
							<option value = '08:30'>08:30</option>
							<option value = '09:00'>09:00</option>
							<option value = '09:30'>09:30</option>
							<option value = '10:00'>10:00</option>
							<option value = '10:30'>10:30</option>
							<option value = '11:00'>11:00</option>
							<option value = '11:30'>11:30</option>
							<option value = '12:00'>12:00</option>
							<option value = '12:30'>12:30</option>
							<option value = '13:00'>13:00</option>
							<option value = '13:00'>13:30</option>
							<option value = '14:00'>14:00</option>
							<option value = '14:30'>14:30</option>
							<option value = '15:00'>15:00</option>
							<option value = '15:30'>15:30</option>
							<option value = '16:00'>16:00</option>
							<option value = '16:30'>16:30</option>
							<option value = '17:00'>17:00</option>
							<option value = '17:30'>17:30</option>
							<option value = '18:00'>18:00</option>
							<option value = '18:30'>18:30</option>
							<option value = '19:00'>19:00</option>
							<option value = '19:30'>19:30</option>
							<option value = '20:00'>20:00</option>
							<option value = '20:30'>20:30</option>
							<option value = '21:00'>21:00</option>
							<option value = '21:30'>21:30</option>
							<option value = '22:00'>22:00</option>
							<option value = '22:30'>22:30</option>
							<option value = '23:00'>23:00</option>
							<option value = '23:30'>23:30</option>
						</select>
					</div>
					<!-- 마감 날짜와 시간을 정하는 곳 -->
					<div id = 'endReg'>
						<span>반납 날짜</span> <br />
						<input value = '반납일' type = 'date' id = 'endDay' class = 'calendar'><br />
						<select id = 'endTime'>
							<option value = '' selected = 'selected'>시간을 정해주세요. </option>
							<option value = '00:00'>00:00</option>
							<option value = '00:30'>00:30</option>
							<option value = '01:00'>01:00</option>
							<option value = '01:30'>01:30</option>
							<option value = '02:00'>02:00</option>
							<option value = '02:30'>02:30</option>
							<option value = '03:00'>03:00</option>
							<option value = '03:30'>03:30</option>
							<option value = '04:00'>04:00</option>
							<option value = '04:30'>04:30</option>
							<option value = '05:00'>05:00</option>
							<option value = '05:30'>05:30</option>
							<option value = '06:00'>06:00</option>
							<option value = '06:30'>06:30</option>
							<option value = '07:00'>07:00</option>					
							<option value = '07:30'>07:30</option>
							<option value = '08:00'>08:00</option>
							<option value = '08:30'>08:30</option>
							<option value = '09:00'>09:00</option>
							<option value = '09:30'>09:30</option>
							<option value = '10:00'>10:00</option>
							<option value = '10:30'>10:30</option>
							<option value = '11:00'>11:00</option>
							<option value = '11:30'>11:30</option>
							<option value = '12:00'>12:00</option>
							<option value = '12:30'>12:30</option>
							<option value = '13:00'>13:00</option>
							<option value = '13:00'>13:30</option>
							<option value = '14:00'>14:00</option>
							<option value = '14:30'>14:30</option>
							<option value = '15:00'>15:00</option>
							<option value = '15:30'>15:30</option>
							<option value = '16:00'>16:00</option>
							<option value = '16:30'>16:30</option>
							<option value = '17:00'>17:00</option>
							<option value = '17:30'>17:30</option>
							<option value = '18:00'>18:00</option>
							<option value = '18:30'>18:30</option>
							<option value = '19:00'>19:00</option>
							<option value = '19:30'>19:30</option>
							<option value = '20:00'>20:00</option>					
							<option value = '20:30'>20:30</option>
							<option value = '21:00'>21:00</option>
							<option value = '21:30'>21:30</option>
							<option value = '22:00'>22:00</option>
							<option value = '22:30'>22:30</option>
							<option value = '23:00'>23:00</option>					
							<option value = '23:30'>23:30</option>
						</select>
					</div>
				</div>
				<!-- 예약 기간에 따라 가격을 나타내주는 곳 -->
				<div id = 'registerBtnDiv'>
					<button id = 'totalPrice'>여기를 올리면 가격이 나옵니다.</button><br>
					<button id = 'registerBtn'>Register</button>
				</div>
		<%
			} else {
		%>
		<!-- 로그인이 안된 경우 -->
				<section class = "wrapper style2 special">
					<div class = "inner narrow">
						<span>회원 가입 or 로그인을 하시기 바랍니다. </span>
					</div>
				</section>
		<%
			}
		%>
        
		<!-- Footer -->
		<footer id = "footer">
			<div class = "copyright">
			&copy; Untitled. Design: <a href = "http://templated.co/">TEMPLATED</a>.
			</div>
		</footer>
    </body>
</html>
```

user_info.ejs

```ejs
<!DOCTYPE html>
<html>
    <head>
        <title>Typify by TEMPLATED</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="stylesheets/main.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src = 'javascripts/listener.js'></script>
		<script src="javascripts/skel.min.js"></script>
		<script src="javascripts/util.js"></script>
        <script src="javascripts/main.js"></script>
    </head>

    <body>
        <div>
            <button id = 'logoutBtn'>LOG OUT</button>
            <button id = 'loginToolbar'><%= loginID %>님 환영합니다. </button>
            <h2>회원 정보 수정</h2>
        </div>
        <!-- 사용자의 비밀번호를 입력하는 공간 -->
        <div class = 'center'>
            <input type = 'password' id = 'checkPW' placeholder = '비밀번호를 입력해주세요. '>
        </div>
        <!-- 사용자의 비밀번호가 맞게 입력되었는지 비교하는 버튼 -->
        <div id = 'checkDiv' align = center>
            <button id = 'checkBtn'>Check</button>
        </div>
        <!-- menu 보여 주는 곳 -->
        <section id = "menu" class = 'wrapper special'>
            <div>
                <a href = '/'><button>홈으로</button></a>
                <a href = '/signup'><button>회원 가입</button></a>
                <a href = '/login'><button>로그인</button></a>
                <a href = '/reservation'><button>예약</button></a>
            </div>
        </section>
        <!-- 사용자의 개인정보를 나타내는 공간 -->
        <div id = 'tableDiv'>
            <table class = 'userInfo'>
                <tr>
                    <td>회원가입 아이디</td>
                    <td><div><input id = 'userIDVal' type = 'button' value = '<%= loginID %>'></div></td>
                    <!-- 변경 불가 ID -->
                </tr>
                <tr>
                    <td>Password</td>
                    <td><div><input id = 'userPWVal' type = 'password' value = ''></div></td>
                    <!-- 변경 가능 PW -->
                </tr>
                <tr>
                    <td>이름</td>
                    <td><div><input id = 'userNameVal' type = 'text' value = ''></div></td>
                    <!-- 변경 가능 이름 -->
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td><div><input id = 'userPhoneVal' type = 'text' value = ''></div></td>
                    <!-- 변경 가능 폰번호 -->
                </tr>
                <tr>
                    <td>Email</td>
                    <td><div><input id = 'userEmailVal' type = 'text' value = ''></div></td>
                    <!-- 변경 가능 Email -->
                </tr>
            </table>
        </div>
        <!-- 사용자의 정보를 삭제하거나 수정하는 공간 -->
        <div align = right>
            <button id = 'deleteUser'>계정 삭제</button>
            <button id = 'modifyInfo'>수정</button>
        </div>
        
    </body>
</html>
```

index.js

```javascript
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.loginState);
  console.log(req.session.userid);
  // signup.ejs를 띄우는데 
  // loginState와 loginID 값을 전달시킴
  res.render('index', {
    loginState: req.session.loginState,
    loginID: req.session.userid,
  });
});

module.exports = router;

```

signup.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// get방식일 경우 수행
router.get('/', (req, res, next) => {
    console.log(req.session.loginState);
    console.log(req.session.userid);
    // signup.ejs를 띄우는데 
    // loginState와 loginID 값을 전달시킴
    res.render('signup', {
        loginState : req.session.loginState,
        loginID : req.session.userid,
    })
});

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    // 입력된 값들을 session 값에 저장
    req.session.userid = req.body.userid;
    req.session.userpw = req.body.userpw;
    req.session.name = req.body.name;
    req.session.phone = req.body.phone;
    req.session.email = req.body.email;

    const result = {
        txt : '회원 가입 오류'
    };

    // 연결 생성
    const con = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: 'root',
        database : 'rentalcar'
    });

    // 연결
    con.connect((err) => {
        if(err) {
            return console.error(err.message);
        }
        console.log('DB Connected', `${req.body.userid} : ${req.body.userpw} : ${req.body.name} : ${req.body.phone} : ${req.body.email}`);
        // sql query문에 해당함
        const sql = `insert into member(id, password, name, phone, email) values('${req.body.userid}', '${req.body.userpw}', '${req.body.name}', '${req.body.phone}', '${req.body.email}')`;
        console.log(sql);
        // query문 수행하는 곳
        con.query(sql, (err, results, fields) => {
            if(err) {
                console.error(err.message);
                res.json(JSON.stringify(results));
                //  query문이 정상일 경우 수행
            } else {
                console.log(results, fields);
                result.txt = `회원 가입을 축하드립니다. ${req.body.name}님`;
                res.json(JSON.stringify(result));
            }
            // 연결 종료
            con.end((err) => {
                if(err) {
                    return console.error(err.message);
                }
            });
        });
    });
});

module.exports = router;
```

login.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// get방식일 경우 수행
router.get('/', (req, res, next) => {
    // login.ejs를 띄우는데 
    // loginState와 loginID 값을 전달시킴
    res.render('login', {
        loginState : req.session.loginState,
        loginID: req.session.userid,
    });
});

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
        console.log('DB Connect: ', req.body.userid);
        // sql query문에 해당
        const sql = 
        `select * from member where id = '${req.body.userid}' and password = '${req.body.userpw}'`;
        console.log(sql);
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '다시 로그인해주세요. ';
                res.json(JSON.stringify(result));
                //  query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs[0] && rs[0].name) {
                    console.log('rs[0] : ', rs[0]);
                    req.session.loginState = true;
                    req.session.userid = req.body.userid;
                    res.redirect('/');
                // query의 결과가 없는 경우
                } else {
                    result.txt = '다시 로그인해주세요. ';
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
```

logout.js

```javascript
var express = require('express');
var router = express.Router()

// get방식일 경우 수행
// session을 없애버림
router.get('/', (req, res, next) => {
    if(req.session.userid) {
        req.session.destroy((err) => {
            res.redirect('/');
        });
    }
});

module.exports = router;
```

reservation.js

```javascript
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
```

car_location.js

```javascript
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
```

car_name.js

```javascript
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
        console.log(req.body.carLocation);
        // sql query문에 해당, 지역에 따른 차량 이름을 중복없이 나타냄
        const sql = `select distinct car_name from car where location = '${req.body.carLocation}'`;
        console.log(sql);
        
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '차량을 선택해주세요. ';
                res.json(JSON.stringify(result));
                // query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    result.txt = rs;
                    res.json(JSON.stringify(result));
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
```

car_number.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); //mysql driver 등록

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
        console.log(req.body.carLocation);
        // sql query문에 해당, 지역과 차량 이름에 따른 차량 번호를 나타냄(중복 없음 primary key이기 때문)
        const sql = `select cno from car where location = '${req.body.carLocation}' and car_name = '${req.body.carName}'`;
        console.log(sql);
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '차량번호를 선택해주세요. ';
                res.json(JSON.stringify(result));
                // query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    result.txt = rs;
                    res.json(JSON.stringify(result));
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
```

price_calculate.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    result = {
        txt : ''
    }

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
        console.log(req.body.carLocation);
        // sql query문에 해당, 차량 번호에 따른 가격을 읽음
        const sql = `select price from car where cno = '${req.body.carNum}'`;
        console.log(sql);
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = 'error를 출력합니다. ';
                res.json(JSON.stringify(result));
                //  query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    result.txt = rs;
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '예약을 할 수 없는 차이거나 날짜를 입력해주세요. ';
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
```

user_info.js

```javascript
var express = require('express');
var router = express.Router();

// get방식일 경우 수행
router.get('/', (req, res, next) => {
    console.log(req.session.loginState);
    console.log(req.session.userid);
    res.render('user_info', {
        loginState : req.session.loginState,
        loginID : req.session.userid,
    })
});

module.exports = router;

```

user_info_check.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    }

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
        console.log('DB Connect: ', req.body.checkPW);
        // sql query문에 해당함, userid에 해당하는 모든것을 읽음
        const sql = 
        `select * from member where id = '${req.session.userid}'`;
        console.log(sql);
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = '해당하는 userid가 없습니다. ';
                res.json(JSON.stringify(result));
                //  query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    console.log('rs : ', rs);
                    result.txt = rs;
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '해당하는 userid가 없습니다. ';
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
    // res.json(JSON.stringify(result));
});

module.exports = router;

```

modify_info.js

```javascript
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
        // sql query문에 해당, userid를 조건으로 하여, password, name, phone, email의 값을 수정함
        const sql = 
        `update member set password = '${req.body.userPW}',
                            name = '${req.body.userName}',
                            phone = '${req.body.userPhone}',
                            email = '${req.body.userEmail}'
                        where id = '${req.session.userid}'`;
        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = 'error 출력 ';
                res.json(JSON.stringify(result));
                //  query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우
                if(rs) {
                    console.log('rs : ', rs);
                    result.txt = rs;
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '해당하는 userid가 없습니다. ';
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
```

delete_user.js

```javascript
var express = require('express');
var router = express.Router();
var mysql = require('mysql'); // mysql driver 등록

// post방식일 경우 수행
router.post('/', (req, res, next) => {
    const result = {
        txt : ''
    }

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
        console.log('DB Connect: ', req.session.userid);
        // member table에서 user 삭제하는 sql query문
        const sql = 
        `delete from member where id = '${req.session.userid}'`;
        console.log(sql);

        // query문 수행하는 곳
        con.query(sql, '', (err, rs, fields) => {
            if(err) {
                console.error(err.message);
                result.txt = 'err를 출력합니다. ';
                res.json(JSON.stringify(result));
                // query문이 정상일 경우 수행
            } else {
                // query의 결과가 있는 경우, session에 담겨 있는 값들을 초기화 시켜줌
                if(rs) {
                    console.log('rs : ', rs);
                    result.txt = rs;
                    req.session.loginState = '';
                    req.session.userid = '';
                    res.json(JSON.stringify(result));
                } else {
                    result.txt = '해당하는 userid가 없습니다. ';
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









    // console.log(req.session.userid);
});

module.exports = router;
```

listener.js

```javascript
$(document).ready(() => {
    // id가 signupBtn인 객체가 눌리면 수행되는 것
    $('#signupBtn').click(() => {
        // 해당 값들을 변수에 저장함. 
        const userid = $('#signupID').val(); 
        const userpw = $('#signupPW').val();
        const name = $('#signupName').val();
        const phone = $('#signupPhone').val();
        const email = $('#signupEmail').val();

        // 하나라도 비어있다면 alert창을 띄움
        if(userid === '') {
            alert('ID를 입력해주세요.');
        } else if(userpw === '') {
            alert('비밀번호를 입력해주세요. ');
        } else if(name === '') {
            alert('이름를 입력해주세요. ');
        } else if(phone === '') {
            alert('핸드폰 번호를 입력해주세요. ');
        } else if(email === '') {
            alert('Email을 입력해주세요. ');
        } else {
            sendParams = {
                userid,
                userpw,
                name,
                phone,
                email
            };

            // post 방식으로 sendParams를 전송
            $.post('/signup', sendParams, (data, status) => {
                alert('회원 가입이 완료되었습니다. ');
                // 해당 id에 있는 값들 초기화
                $('#signupID').val('');
                $('#signupPW').val('');
                $('#signupName').val('');
                $('#signupPhone').val('');
                $('#signupEmail').val('');
            });
        }
    });

    // id가 loginBtn인 객체가 눌리면 수행되는 것
    $('#loginBtn').click(() => {
        // 해당 값들을 변수에 저장함. 
        const userid = $('#loginID').val(); 
        const userpw = $('#loginPW').val();
        // 하나라도 비어있다면 alert창을 띄움
        if(userid === '') {
            alert('ID를 입력해주세요.');
        } else if(userpw === '') {
            alert('비밀번호를 입력해주세요. ');
        } else {
            sendParams = {
                userid,
                userpw
            }
            // post 방식으로 sendParams를 전송
            $.post('/login', sendParams, (data, status) => {
                try {
                    // 해당 id에 있는 값들 초기화
                    $('#loginID').val() = '';
                    $('#loginPW').val() = '';
                } catch(err) {
                    window.location.reload(true);
                }
            });
        }
    });

    // id가 logoutBtn인 객체가 눌리면 수행되는 것
    $('#logoutBtn').click(() => {
        // get방식으로 수행 후 reload 수행
        $.get('/logout', '', (data, status) => {
            location.reload(true);
        });
    });

    // id가 carLocation 객체 위에 있으면 수행되는 것
    $('#carLocation').mouseover(() => {
        var carLocationCount = 0;
        // post 방식으로 car_location.js file로 전송
        $.post('/car_location', '', (data, status) => {
            const parsedData = JSON.parse(data);
            // 처음에는 아무것도 출력을 안함
            if(carLocationCount == 0) {
                $('#carLocation').html('');
            }
            // 지역의 개수만큼 for문을 수행
            parsedData.txt.forEach((element) => {
                // DB안에 있는 지역을 option의 인자로 넣어주어 보여줌
                if(carLocationCount < parsedData.txt.length) {
                    $('#carLocation').append(`<option value = "${element.location}">${element.location}</option>`);
                    carLocationCount++;
                }
            });
            // 값을 초기화 하지 않으면 append함수로 인해 select option tag로 계속 추가되기에 값을 초기화
        });
        carLocationCount = 0;
    });

    // id가 carName 객체 위에 있으면 수행되는 것
    $('#carName').mouseover(() => {
        var carNameCount = 0;

        // 해당 값들을 변수에 저장함. 
        const carLocation = $('#carLocation').val();
        
        const sendParams = {
            carLocation
        };
        // post 방식으로 car_name.js file로 전송하며 sendParams를 인자로 전송
        $.post('/car_name', sendParams, (data, status) => {
            const parsedData = JSON.parse(data);
            // 처음에는 아무것도 출력을 안함
            if(carNameCount == 0) {
                $('#carName').html('');
            }
            // 지역에 대한 차량 개수만큼 for문을 수행
            parsedData.txt.forEach((element) => {
                // DB안에 있는 차량 개수를 option의 인자로 넣어주어 보여줌
                if(carNameCount < parsedData.txt.length) {
                    $('#carName').append(`<option value = "${element.car_name}">${element.car_name}</option>`);
                    carNameCount++;
                }
            });
            // 값을 초기화 하지 않으면 append함수로 인해 select option tag로 계속 추가되기에 값을 초기화
        });
        carNameCount = 0;
    });

    // id가 carNum 객체 위에 있으면 수행되는 것
    $('#carNum').mouseover(() => {
        // 해당 값들을 변수에 저장함. 
        const carLocation = $('#carLocation').val();
        const carName = $('#carName').val();
        
        const sendParams = {
            carLocation,
            carName,
        };
        // post 방식으로 car_name.js file로 전송하며 sendParams를 인자로 전송
        $.post('/car_number', sendParams, (data, status) => {
            const parsedData = JSON.parse(data);
            // 처음에는 아무것도 출력을 안함
            if(carNameCount == 0) {
                $('#carNum').html('');
            }
            // 지역에 대한 차량 개수만큼 for문을 수행
            parsedData.txt.forEach((element) => {
                // DB안에 있는 차량에 대한 차량번호 개수를 option의 인자로 넣어주어 보여줌
                if(carNameCount < parsedData.txt.length) {
                    $('#carNum').append(`<option value = "${element.cno}">${element.cno}</option>`);
                    carNameCount++;
                }
            });
            // 값을 초기화 하지 않으면 append함수로 인해 select option tag로 계속 추가되기에 값을 초기화
        });
        carNameCount = 0;
    });

    // id가 totalPrice 객체 위에 있으면 수행되는 것
    $('#totalPrice').mouseover(() => {
        // 값 초기화
        let carPriceCount = 0;
        // 해당 값들을 변수에 저장함. 
        const strDate1 = $('#startDay').val();
        const strDate2 = $('#endDay').val();
        // Date 객체에 대해서 -를 기준으로 값을 잘라내어 값을 저장
        const arr1 = strDate1.split('-');
        const arr2 = strDate2.split('-');
        // Date 객체 생성 Date의 일자의 차이를 연산하기 위함
        const dat1 = new Date(arr1[0], arr1[1], arr1[2]);
        const dat2 = new Date(arr2[0], arr2[1], arr2[2]);

        const diff = dat2 - dat1; // 날짜 차이를 연산
        const currDay = 24 * 60 * 60 * 1000; // 시 * 분 * 초 * 밀리세컨
        const diffDay = parseInt(diff / currDay); // 날짜 차이를 int형으로 변환
        const carNum = $('#carNum').val();
        let price;
        const sendParams = {
            diffDay,
            carNum,
        }
        // post 방식으로 price_calculate.js file로 전송하며 sendParams를 인자로 전송
        $.post('/price_calculate', sendParams, (data, status) => {
            const parsedData = JSON.parse(data);
            // 차량 가격에 개수만큼 for문 수행
            parsedData.txt.forEach((element) => {
                if(carPriceCount < parsedData.txt.length) {
                    price = element.price;
                    carPriceCount++;
                }
            });
            // Date 객체를 연산할때, 날짜 차이를 int형으로 만들기 위함
            if(isNaN(parseInt(diffDay * parsedData.txt[0].price))) {
                $('#totalPrice').html(
                    "여기를 올리면 가격이 나옵니다."
                );
                // 가격을 나타내는 공간
            } else {
                $('#totalPrice').html(
                    "총 가격은 " +
                    parseInt(diffDay * parsedData.txt[0].price) +
                    " 입니다. "
                );
            }
        });
        

    });

    // id가 registerBtn인 객체가 눌리면 수행되는 것
    $('#registerBtn').click(() => {
        // 해당 값들을 변수에 저장함. 
        const location = $('#carLocation').val();
        const carName = $('#carName').val();
        const carNum = $('#carNum').val();
        const startDay = $('#startDay').val();
        const startTime = $('#startTime').val();
        const endDay = $('#endDay').val();
        const endTime = $('#endTime').val();

        const sendParams = {
            location,
            carName,
            carNum,
            startDay,
            startTime,
            endDay,
            endTime
        }
        // 하나라도 비어있다면 alert창을 띄움
        if($('#carLocation').val() === '') {
            alert('지역을 선택해주세요.');
        } else if($('#carName').val() === '') {
            alert('차량 이름을 선택해주세요.');
        } else if($('#carNum').val() === '') {
            alert('차량 번호를 선택해주세요.');
        } else if($('#startDay').val() === '') {
            alert('예약 일자를 선택해주세요.');
        } else if($('#endDay').val() === '') {
            alert('반납 일자를 선택해주세요.');
        } else if($('#startTime').val() === '') {
            alert('예약 시간를 선택해주세요.');
        } else if($('#endTime').val() === '') {
            alert('반납 시간를 선택해주세요.');
        } else {
            // 예약을 할 것인지 확인하는 곳
            if(confirm('예약을 하시겠습니까?')) {
                // 확인 버튼을 누르면 수행됨
                // post 방식으로 reservation.js file로 전송하며 sendParams를 인자로 전송
                $.post('/reservation', sendParams, (data, status) => {
                    try {
                        // 해당 id에 있는 값들 초기화
                        $('#location').val('')
                        $('#carName').val('')
                        $('#startDay').val('')
                        $('#startTime').val('')
                        $('#endDay').val('')
                        $('#endTime').val('')
                    } catch(err) {
                        window.location.reload(true);
                    }
                });
            }
        }
    });

    // id가 checjBtn인 객체가 눌리면 수행되는 것
    $('#checkBtn').click(() => {
        // 해당 값들을 변수에 저장함. 
        const checkPW = $('#checkPW').val();

        const sendParams = {
            checkPW
        }
        // post 방식으로 user_info_check.js file로 전송하며 sendParams를 인자로 전송
        $.post('/user_info_check', sendParams, (data, status) => {
            const parsedData = JSON.parse(data);
            // 해당 id의 객체에 인자값들을 채움
            $('#userIDVal').val(parsedData.txt[0].id);
            $('#userPWVal').val(parsedData.txt[0].password);
            $('#userNameVal').val(parsedData.txt[0].name);
            $('#userPhoneVal').val(parsedData.txt[0].phone);
            $('#userEmailVal').val(parsedData.txt[0].email);
        });
    });

    // id가 modifyInfo인 객체가 눌리면 수행되는 것
    $('#modifyInfo').click(() => {
        // 해당 값들을 변수에 저장함. 
        const userPW = $('#userPWVal').val();
        const userName = $('#userNameVal').val();
        const userPhone = $('#userPhoneVal').val();
        const userEmail = $('#userEmailVal').val();

        const sendParams = {
            userPW,
            userName,
            userPhone,
            userEmail,
        };
        // 하나라도 비어있다면 alert창을 띄움
        if(userPW == '') {
            alert('비밀번호를 입력해주시기 바랍니다. ');
        } else if(userName == '') {
            alert('이름을 입력해주시기 바랍니다. ');
        } else if(userPhone == '') {
            alert('핸드폰 번호를 입력해주시기 바랍니다. ');
        } else if(userEmail == '') {
            alert('Email 주소를 입력해주시기 바랍니다. ');
        } else {
            // post 방식으로 modify_info.js file로 전송하며 sendParams를 인자로 전송
            $.post('/modify_info', sendParams, (data, status) => {
                // 해당 id에 있는 값들 초기화
                $('#userPWVal').val('');
                $('#userNameVal').val('');
                $('#userPhoneVal').val('');
                $('#userEmailVal').val('');
                alert('회원 정보가 수정되었습니다. ');
            });
        }
    });

    // id가 deleteUser인 객체가 눌리면 수행되는 것
    $('#deleteUser').click(() => {
        // 중요 정보이기에 '정말 삭제하는지' 물어봄
        if(confirm("계정을 정말 삭제하시겠습니까?")) {
            // 확인 버튼을 누르면 수행함
            // post 방식으로 delete_user.js file로 전송함
            $.post('/delete_user', '', (data, status) => {
                alert('저희 서비스를 이용해주셔서 감사합니다. ');
                $.get('/logout', '', (data, status) => {
                    location.reload(true);
                });
            });
        }
    });
});
```

