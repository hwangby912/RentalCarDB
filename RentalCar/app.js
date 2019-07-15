var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mysql = require('mysql');

var app = express();

// view engine setup
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
  saveUninitialized: false, 
  secret: '2nd project', 
  cookie: {
    httpOnly: true,
    secure: false
  }
}));

app.use('/', require('./routes/index'));
app.use('/signup', require('./routes/signup'));
app.use('/login', require('./routes/login'));
// app.use('/logout', require('./routes/logout'));
// app.use('/reservation', require('./routes/reservation'));
// app.use('/exchange', require('./routes/exchange'));

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
