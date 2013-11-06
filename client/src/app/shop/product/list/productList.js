angular.module( 'meanShop.shop.productList', [
  'ui.router'
])

.controller('ProductListCtrl', function ($scope, store, $stateParams) {
  $scope.categories = store.getCategories();
  $scope.products = store.getProductsByCategory($stateParams.category);
})

;
