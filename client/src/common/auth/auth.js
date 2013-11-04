angular.module( 'auth', [

])


.factory('auth', function ($http) {

  var _authStatus = false;

  return {
    signIn: function(userData){
      var promise = $http.post("/login", userData);
      promise.success(function(){
        _authStatus = true;
      });
      return promise;
    },
    signOut: function(){
      var promise =  $http.get("/logout");
      promise.success(function(){
        _authStatus = false;
      });
      return promise;
    },
    register: function(){

    },
    status: function(){
      return _authStatus;
    }
  };
})

;
