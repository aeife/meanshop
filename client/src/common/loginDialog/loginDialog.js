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
    console.log($scope.signInData);
  };

  $scope.register = function(){
    console.log($scope.registerData);
  };

  $scope.close = function(){
    $modalInstance.close();
  };
})

;
