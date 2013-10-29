angular.module( 'meanShop.shop', [
  'ui.router',
  'meanShop.shop.shopCategory',
  'meanShop.shop.categoryChooser'
])

.controller('ShopCtrl', function ($scope, store) {
  $scope.categories = store.getCategories();
})

;
