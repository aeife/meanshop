angular.module( 'meanShop.shop', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state('shop', {
    url: '/shop',
    views: {
      "main": {
        controller: 'ShopCtrl',
        templateUrl: 'shop/shop.tpl.html'
      }
    },
    data:{pageTitle: 'Shop'}
  });
})

.controller('ShopCtrl', function ($scope, store) {
  $scope.products = store.getProducts();
})

;
