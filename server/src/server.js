var express = require('express');
var http = require('http');
var config = require('./config.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user.js');
var crypto = require('crypto');

var app = express();
var server = http.createServer(app);

app.configure(function(){
  app.set('port', config.server.listenPort);
  app.use(express.bodyParser());
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'mySecret' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(config.server.distPath));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      user.verifyPassword(password, function(err, res){
        if (err) {
          return done(err);
        }
        if (!res) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      });
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// deserialize user on logout
passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
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
