angular.module( 'product', [
  'ngResource'
])

.factory('Product', function ($resource) {
  return $resource('/product/:productId', {productId:'@id'});
})

;
