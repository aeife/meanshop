var express = require('express');
var http = require('http');
var config = require('./config.js');

var app = express();
var server = http.createServer(app);

app.configure(function(){
  app.set('port', config.server.listenPort);
  app.use(express.bodyParser());
  app.use(express.logger('dev'));
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

var routes = require('./routes.js');
routes.addRoutes(app, {
  products: require('./routes/products.js')
});
