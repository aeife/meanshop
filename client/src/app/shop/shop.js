angular.module( 'meanShop.shop', [
  'ui.router',
  'meanShop.shop.product',
  'meanShop.shop.category',
  'meanShop.shop.sidebar',
  'meanShop.shop.cart'
])

.controller('ShopCtrl', function ($scope, store) {
  // $scope.categories = store.getCategories();
})

;
