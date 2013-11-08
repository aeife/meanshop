angular.module('adminWidget', [
])

.directive('adminWidget', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'adminWidget/adminWidget.tpl.html',
    controller: function($scope, auth){
      $scope.loginStatus = auth.status;
    }
  };
})

;
