angular.module( 'meanShop.shop.sidebar', [
  'ui.router'
])

.controller('ShopSidebarCtrl', function ($scope, store, $state) {
  $scope.categories = store.getCategories();
  $scope.currentCategory = store.getCurrentCategory;

  store.setCurrentCategory($state.params.category);

  $scope.changeCurrentCategory = function(categoryId){
    store.setCurrentCategory(categoryId);
  };
})

;
