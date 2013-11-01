angular.module( 'meanShop.shop.categoryChooser', [
  'ui.router'
])

.controller('CategoryChooserCtrl', function ($scope, store, $state) {
  $scope.categories = store.getCategories();
  $scope.state = $state;
})

;
