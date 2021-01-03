var createError = require('http-errors');
var express = require('express');
// var dotenv = require('dotenv')
const PORT = process.env.PORT || 8000
var database = require('./config/database')

var postRouter = require('./routes/postRouter');
var usersRouter = require('./routes/users');

// dotenv.config(
//   { 
//       path: "./config/config.env" 
//   }
// );

var app = express();

database.authenticate()
.then(() => console.log("Connected to database"))
.catch((err) => console.log("Error in connecting to database and error is " , err))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/posts/api/v1', postRouter);
app.use('/users/api/v1', usersRouter);                                                                                                                

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(PORT , () => {
  console.log(`Listening to ${PORT}`)
})

module.exports = app;
