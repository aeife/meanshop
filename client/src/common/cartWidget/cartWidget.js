angular.module('cartWidget', [
])

.directive('cartWidget', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'cartWidget/cartWidget.tpl.html',
    controller: function($scope, cart){
      $scope.cart = cart;
    }
  };
})

;
