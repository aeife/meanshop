angular.module( 'meanShop.shop.categoryNew', [

])

.controller('CategoryNewCtrl', function ($scope, store) {

  $scope.add = function(){
    store.addCategory($scope.category);
  };
})

;
