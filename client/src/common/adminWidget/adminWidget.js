angular.module('adminWidget', [
])

.directive('adminWidget', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'adminWidget/adminWidget.tpl.html',
    controller: function($scope, auth, $state){
      $scope.loginStatus = auth.status;

      // define posible state transitions for edits
      var _transitionsEdit = {
        'sidebarView.shop.product.detail': 'sidebarView.shop.product.edit',
        'sidebarView.shop.product.list': 'sidebarView.shop.category.edit'
      };

      $scope.editCurrent = function(){
        if (_transitionsEdit[$state.current.name]){
           $state.transitionTo(_transitionsEdit[$state.current.name], $state.params);
        }
      };

      $scope.isEditable = function(){
        return !!_transitionsEdit[$state.current.name];
      };
    }
  };
})

;
