angular.module( 'meanShop.shop.productDetail', [

])

.controller('ProductDetailCtrl', function ($scope, store, $stateParams) {
  $scope.product = store.getProduct($stateParams.product);

  $scope.addToCart = function(){
    store.cart.addItem($scope.product);
  };
})

;
