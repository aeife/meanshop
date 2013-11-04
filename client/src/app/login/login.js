angular.module( 'meanShop.login', [

])

.controller('LoginCtrl', function ($scope, auth) {
  $scope.username = null;
  $scope.password = null;
  $scope.login = function(){
    auth.signIn({username: $scope.username, password: $scope.password}).then(function(){
      console.log("success");
    }, function(){
      console.log("error");
    });
    // console.log(loginForm.password);
  };
})

;
