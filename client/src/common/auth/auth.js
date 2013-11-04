angular.module( 'auth', [

])


.factory('auth', function ($http) {

  var _authStatus = false;
  var _user = {};

  return {
    signIn: function(userData){
      var promise = $http.post("/login", userData);
      promise.success(function(data){
        _authStatus = true;
        _user = data;
      });
      return promise;
    },
    signOut: function(){
      var promise =  $http.get("/logout");
      promise.success(function(){
        _authStatus = false;
        _user = {};
      });
      return promise;
    },
    register: function(){

    },
    status: function(){
      return _authStatus;
    },
    currentUser: function(){
      return _user;
    }
  };
})

;
