angular.module( 'meanShop.shop.productEdit', [

])

.controller('ProductEditCtrl', function ($scope, store, $stateParams) {
  $scope.product = store.getProduct($stateParams.product);
  $scope.categories = store.getCategories();

  // wait for both data sets
  var _productsFetched = false;
  var _categoriesFetched = false;

  $scope.product.$promise.then(function(data){
    _productsFetched = true;
    if (_categoriesFetched){
      setCurrentCategory();
    }
  });
  $scope.categories.$promise.then(function(data){
    _categoriesFetched = true;
    if (_productsFetched){
      setCurrentCategory();
    }
  });

  var setCurrentCategory = function(){
    // angular select needs a reference to the array instead of a equal object, so replace products category object with reference
    for (var i = 0, len = $scope.categories.length; i < len; i++){
      if (angular.equals($scope.categories[i], $scope.product.category)){
        $scope.product.category = $scope.categories[i];
        break;
      }
    }
  };

  $scope.update = function(){
    console.log($scope.product);
  };
})

;
