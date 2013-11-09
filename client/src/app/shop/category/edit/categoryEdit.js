angular.module( 'meanShop.shop.categoryEdit', [

])

.controller('CategoryEditCtrl', function ($scope, store, $stateParams) {
  $scope.category = store.getCategory($stateParams.category);

  $scope.update = function(){
    store.updateCategory($scope.category);
  };
})

;
