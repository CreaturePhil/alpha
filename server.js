/**
 * Module dependencies.
 */

var chalk = require('chalk');
var express = require('express');
var logger = require('morgan');
var path = require('path');

var config = require('./config');
var routes = require('./config/routes');

/**
 * Create an express application.
 */

var app = express();

/**
 * App configuration.
 */

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

if (app.get('env') === 'development') {
  // don't minify html
  app.locals.pretty = true;

  // turn on console logging
  app.use(logger('dev'));
}

// static files
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes setup.
 */

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * Error handlers
 */

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}

/**
 * Start Express server.
 */

app.listen(config.port, function() {
  var env = '\n[' + chalk.green(app.get('env')) + ']';
  var port = chalk.magenta(config.port);
  console.log(env + ' Listening on port ' + port + '...\n');
});

module.exports = app;
