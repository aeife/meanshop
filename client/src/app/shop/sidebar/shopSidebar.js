angular.module( 'meanShop.shop.sidebar', [
  'ui.router'
])

.controller('ShopSidebarCtrl', function ($scope, store, $state) {
  $scope.categories = store.getCategories();
  $scope.state = $state;
})

;
