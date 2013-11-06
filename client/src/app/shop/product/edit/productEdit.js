angular.module( 'meanShop.shop.productEdit', [

])

.controller('ProductEditCtrl', function ($scope, store, $stateParams) {
  $scope.product = store.getProduct($stateParams.product);

  $scope.update = function(){

  };
})

;
