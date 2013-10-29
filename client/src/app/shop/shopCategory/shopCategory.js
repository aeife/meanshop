angular.module( 'meanShop.shop.shopCategory', [
  'ui.router'
])

.controller('ShopCategoryCtrl', function ($scope, store, $stateParams) {
  $scope.categories = store.getCategories();
  $scope.products = store.getProductsByCategory($stateParams.category);
})

;
