var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const FRoutes = require('./Routes/LoginRoutes')
const { error } = require('console');
const mongoose = require('mongoose');

const routes = require('./Routes/LoginRoutes');

var app = express();
mongoose.connect("mongodb+srv://Reethu_Lanka:Reethu2004@cluster0.2xhs0.mongodb.net/mydatabase?retryWrites=true&w=majority")
.then(result=>{
  console.log("Connected Successfully");
})
.catch(error=>{
  console.log(error);
})


app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(routes);
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());

app.use('/api',FRoutes);


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

app.listen(4000,function(){
  console.log("server started");
})

module.exports = app;
