angular.module( 'auth', [

])


.factory('auth', function ($http) {

  return {
    signIn: function(userData){
      return $http.post("/login", userData);
    },
    signOut: function(){
      return $http.get("/logout");
    },
    register: function(){

    },
    status: function(){

    }
  };
})

;
