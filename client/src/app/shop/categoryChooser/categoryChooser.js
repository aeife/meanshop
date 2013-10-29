angular.module( 'meanShop.shop.categoryChooser', [
  'ui.router'
])

.controller('CategoryChooserCtrl', function ($scope, store) {
  $scope.categories = store.getCategories();
})

;
