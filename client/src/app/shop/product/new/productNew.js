angular.module( 'meanShop.shop.productNew', [

])

.controller('ProductNewCtrl', function ($scope, store, $stateParams) {
  $scope.categories = store.getCategories();

  $scope.add = function(){
    console.log($scope.product);
  };
})

;
