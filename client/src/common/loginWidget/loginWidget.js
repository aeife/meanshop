angular.module('meanShop.loginWidget', [

])

.directive('loginWidget', function() {
  return {
    restrict: 'E',
    templateUrl: 'loginWidget/loginWidget.tpl.html',
    controller: function($scope, auth){
      $scope.loginStatus = auth.status;
      $scope.user = auth.currentUser;

      $scope.logout = function(){
        auth.signOut();
      };
    }
  };
})

;
