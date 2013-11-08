angular.module( 'meanShop.shop.productDetail', [

])

.controller('ProductDetailCtrl', function ($scope, store, $stateParams) {
  $scope.product = store.getProduct($stateParams.product);

  $scope.product.$promise.then(function(){
    store.setCurrentCategory($scope.product.category._id);
  });

  $scope.addToCart = function(){
    store.cart.addItem($scope.product);
  };
})

;
