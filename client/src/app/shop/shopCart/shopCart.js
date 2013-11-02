angular.module( 'meanShop.shop.shopCart', [

])

.controller('ShopCartCtrl', function ($scope, store) {
  $scope.cart = store.cart;
})

;
