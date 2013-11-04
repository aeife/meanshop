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

    expect(auth.status()).toEqual(false);
    $httpBackend.flush();
    expect(auth.status()).toEqual(true);
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

    expect(auth.status()).toEqual(false);
    $httpBackend.flush();
    expect(auth.status()).toEqual(false);
  }));

  it('should change status on logout', inject( function() {
    // login first
    $httpBackend
    .expectPOST('/login', {username: 'testuser', password: 'testpass', password2: 'testpass'})
    .respond(200, '');

    var promise = auth.signIn({username: 'testuser', password: 'testpass', password2: 'testpass'});

    $httpBackend.flush();
    expect(auth.status()).toEqual(true);

    // now log out
    $httpBackend
    .whenGET('/logout')
    .respond(200);

    promise = auth.signOut();
    promise.error(function (data, status, header){
      expect(status).toEqual(200);
    });

    expect(auth.status()).toEqual(true);
    $httpBackend.flush();
    expect(auth.status()).toEqual(false);
  }));

  it('should save user on login', inject( function() {
    $httpBackend
    .expectPOST('/login', {username: 'testuser', password: 'testpass', password2: 'testpass'})
    .respond(200, {username: 'testuser'});

    var promise = auth.signIn({username: 'testuser', password: 'testpass', password2: 'testpass'});
    promise.success(function (data, status, header){
      expect(status).toEqual(200);
      expect(data).toEqual({username: 'testuser'});
    });

    $httpBackend.flush();
    expect(auth.currentUser()).toEqual({username: 'testuser'});
  }));

  it('should delete user on logout', inject( function() {
    // login first
    $httpBackend
    .expectPOST('/login', {username: 'testuser', password: 'testpass', password2: 'testpass'})
    .respond(200, {username: 'testuser'});

    var promise = auth.signIn({username: 'testuser', password: 'testpass', password2: 'testpass'});

    $httpBackend.flush();
    expect(auth.currentUser()).toEqual({username: 'testuser'});

    $httpBackend
    .whenGET('/logout')
    .respond(200);

    promise = auth.signOut();
    promise.error(function (data, status, header){
      expect(status).toEqual(200);
    });


    $httpBackend.flush();
    expect(auth.currentUser()).toEqual({});
  }));

});
