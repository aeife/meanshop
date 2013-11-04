describe( 'auth factory', function() {
  var Product, $httpBackend;

  beforeEach(module('auth'));

  beforeEach(inject(function (_auth_, _$httpBackend_){
    auth = _auth_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should login successfull', inject( function() {
    $httpBackend
    .expectPOST('/login', {username: 'testuser', password: 'testpass', password2: 'testpass'})
    .respond(200, '');

    var promise = auth.signIn({username: 'testuser', password: 'testpass', password2: 'testpass'});
    promise.success(function (data, status, header){
      expect(status).toEqual(200);
    });

    $httpBackend.flush();
  }));

  it('should handle login error', inject( function() {
    $httpBackend
    .expectPOST('/login', {username: 'testuser', password: 'testpass', password2: 'testpass'})
    .respond(401, 'login error');

    var promise = auth.signIn({username: 'testuser', password: 'testpass', password2: 'testpass'});
    promise.error(function (data, status, header){
      expect(data).toEqual('login error');
      expect(status).toEqual(401);
    });

    $httpBackend.flush();
  }));
});
