// importing 3rd party modules
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

// modules for autentification
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';

// autentification objects
let localStrategy = passportLocal.Strategy;
import User from '../Models/user';

// module for autentification messaging and error managemnet
import flash from 'connect-flash';


// App configuration
import indexRouter from '../Routes/index';
const app = express();
export default app;
 
// DB configuration
import * as DBConfig from './db';
mongoose.connect(DBConfig.URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Connected to MongoDB at: ${DBConfig.URI}`);
});


// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client/')));
app.use(express.static(path.join(__dirname, '../../node_modules/')));

// setup express session
app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized: false,
  resave: false
}));

//initialize flash
app.use(flash());

// initialize passport
app.use(passport.initialize());

//cookie base autentification
app.use(passport.session());

// implement an autentification strategy
passport.use(User.createStrategy());

//serialize and deserialize user data
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Route config
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next:express.NextFunction) {
  // set locals, only providing error in development

  let message = err.message;
  let error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {message: message, error:error, title: '', page: '', displayName: ''});
});

//module.exports = app;
