angular.module( 'meanShop.shop.cart', [
])

.controller('ShopCartCtrl', function ($scope, store) {
  $scope.cart = store.cart;
})

;
