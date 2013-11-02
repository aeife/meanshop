angular.module( 'meanShop.shop', [
  'ui.router',
  'meanShop.shop.shopCategory',
  'meanShop.shop.shopProduct',
  'meanShop.shop.categoryChooser',
  'meanShop.shop.shopCart'
])

.controller('ShopCtrl', function ($scope, store) {
  $scope.categories = store.getCategories();
})

;
