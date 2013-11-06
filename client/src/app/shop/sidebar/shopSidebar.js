angular.module( 'meanShop.shop.shopSidebar', [
  'ui.router'
])

.controller('ShopSidebarCtrl', function ($scope, store, $state) {
  $scope.categories = store.getCategories();
  $scope.state = $state;
})

;
