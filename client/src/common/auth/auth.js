angular.module( 'auth', [

])


.factory('auth', function ($http, $cookieStore) {

  var _authStatus = $cookieStore.get('user') ? true : false;
  var _user = $cookieStore.get('user') ? $cookieStore.get('user') : {};

  return {
    signIn: function(userData){
      var promise = $http.post("/login", userData);
      promise.success(function(data){
        _authStatus = true;
        _user = data;
        $cookieStore.put('user', _user);
      });
      return promise;
    },
    signOut: function(){
      var promise =  $http.get("/logout");
      promise.success(function(){
        _authStatus = false;
        _user = {};
        $cookieStore.remove('user');
      });
      return promise;
    },
    register: function(){

    },
    status: function(){
      return _authStatus;
    },
    isLoggedIn: function(){
      return $http.get('/auth');
    },
    currentUser: function(){
      return _user;
    }
  };
})

;
