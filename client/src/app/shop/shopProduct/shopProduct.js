angular.module( 'meanShop.shop.shopProduct', [
  'ui.router'
])

.controller('ShopProductCtrl', function ($scope, store, $stateParams) {
  $scope.product = store.getProduct($stateParams.product);

  $scope.addToCart = function(){
    store.cart.addItem($scope.product);
  };
})

;
