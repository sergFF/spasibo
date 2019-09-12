const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const config = require('config');
const log = require('./utils/logger');

const passportHelper = require('./web_api/modules/auth/passport');
const authenticationMiddleware = require('./web_api/modules/auth/authorisationMiddleware');

const passport = passportHelper.initPassport();

const routes = require('./web_api/index');


// Main application
const app = express();
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

// Enable compression
app.use(compression());

// enable cors for *
app.use(cors({ methods: 'GET, POST, PUT, DELETE' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
log.setLogLevel('debug');
app.use(morgan(':method :url :status :response-time ms - :res[content-length]', { stream: log }));

app.use(`/api/`, routes);


app.post('/login', passportHelper.authenticate, (req, res) => {
  res.send({}) ;
});

app.post('/logout', authenticationMiddleware(), (req, res) => {
  req.logOut();
  res.send({});
});

// function authenticationMiddleware () {
//   return function (req, res, next) {
//     console.log('Middleware');
//     if (req.isAuthenticated()) {
//       return next()
//     }
//     console.log('Error');
//     // res.redirect('/')
//     const err = new Error('Authorisation error');
//     err.status = 505;
//     return next(err);
//   }
// }

app.get('/test', authenticationMiddleware(), (req, res, next) => {
  console.log('Direct!');
  return res.status(200)
    .json({ result: "Ok" });
});


// not found route
app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

/**
 * ERRORS handle
 * WARNING! Do not remove next from parameters!!!
 */
/* eslint-disable no-unused-vars */
app.use((err, req, res, next) =>
  res.status(err.status || 500)
    .json({
      error: {
        message: err.message,
        details: err.stack
      }
    })
);
/* eslint-enable no-unused-vars */

module.exports = app;
