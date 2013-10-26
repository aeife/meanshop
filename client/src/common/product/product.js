angular.module( 'product', [
  'ngResource'
])

.factory('product', function ($resource) {
  return $resource('/product/:productId', {productId:'@id'});
})

;
