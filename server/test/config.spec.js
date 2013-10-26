var config = require('../src/config.js');

describe( 'config object', function() {

  it('should get config value', function(){
    expect(config.server.listenPort).toEqual(3000);
    var r;
  });

});
