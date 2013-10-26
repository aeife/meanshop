angular.module( 'meanShop.shop.shopCategory', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state('shopCategory', {
    url: '/shop/:category',
    views: {
      "main": {
        controller: 'ShopCategoryCtrl',
        templateUrl: 'shop/shopCategory/shopCategory.tpl.html'
      }
    },
    data:{pageTitle: 'Shop'}
  });
})

.controller('ShopCategoryCtrl', function ($scope, store) {
  $scope.categories = store.getCategories();
  $scope.products = store.getProducts();
})

;
