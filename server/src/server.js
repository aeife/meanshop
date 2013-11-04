var express = require('express');
var http = require('http');
var config = require('./config.js');
var passport = require('passport');

var app = express();
var server = http.createServer(app);

app.configure(function(){
  app.set('port', config.server.listenPort);
  app.use(express.bodyParser());
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  // app.use(require('grunt-contrib-livereload/lib/utils').livereloadSnippet);
  app.use(express.static(config.server.distPath));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// start server
server.listen(app.get('port'), function(){
  console.log('Express server listening on port2s ' + app.get('port'));
});

// database
var mongoose = require('mongoose');
mongoose.connect(config.mongoDB.url);

var routes = require('./routes.js');
routes.addRoutes(app, {
  products: require('./routes/products.js'),
  categories: require('./routes/categories.js'),
  auth: require('./routes/auth.js')
});

module.exports = server;
