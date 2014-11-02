var express = require('express');
var morgan = require('morgan');

var path = require('path');

var routes = require('./config/routes');

var app = express();

/**
 * App configuration.
 */

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

// routes setup
app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

/**
 * Error Handlers
 */

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  // Don't minify html
  app.locals.pretty = true;

  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      title: 'Page not found',
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    title: 'Page not found',
    message: err.message,
    error: {}
  });
});

module.exports = app;
