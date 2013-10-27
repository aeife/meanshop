var request = require('request');
var server = require('../src/server');
var config = require('../src/config.js');


describe('server app', function() {
  var url = "http://localhost:" + config.server.listenPort;

  it("should have opened server on correct port", function(done) {
    request(url + "/", function(error, response, body){
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

});
