angular.module( 'meanShop.shop.cartWidget', [
  'ui.router'
])

.controller('CartWidgetCtrl', function ($scope, cart) {
  $scope.cart = cart;
})

;
