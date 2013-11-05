angular.module('meanShop.loginDialog', [

])

.controller('LoginDialogCtrl', function ($scope, auth, $modalInstance) {
  $scope.signInData = {
    username: '',
    password: ''
  };
  $scope.registerData = {
    username: '',
    password: '',
    passwordConfirm: ''
  };

  $scope.login = function(){
    auth.signIn($scope.signInData).then(function(){
      console.log("success");
      $scope.close();
    }, function(){
      console.log("error");
    });
  };

  $scope.register = function(){
    console.log($scope.registerData);
  };

  $scope.close = function(){
    $modalInstance.close();
  };
})

;
