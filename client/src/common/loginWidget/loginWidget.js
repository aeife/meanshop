angular.module('loginWidget', [
  'ui.bootstrap'
])

.directive('loginWidget', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'loginWidget/loginWidget.tpl.html',
    controller: function($scope, auth, $modal){
      $scope.loginStatus = auth.status;
      $scope.user = auth.currentUser;

      $scope.login = function(){
        var modal = $modal.open({
          backdrop: true,
          keyboard: true,
          backdropClick: true,
          templateUrl: 'loginDialog/loginDialog.tpl.html',
          controller: 'LoginDialogCtrl'
        });
        modal.result.then(function(result){
          if(result){
            alert('model closed with result: ' + result);
          }
        });
      };

      $scope.logout = function(){
        auth.signOut();
      };
    }
  };
})

;
