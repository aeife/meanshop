var User = require('./user.js');

describe('user model', function() {

  it('should create new user object', function(){
    var user = new User({
      username: 'testname',
      password: 'testpass',
      created: new Date()
    });
    expect(user.username).toEqual('testname');
  });

});
