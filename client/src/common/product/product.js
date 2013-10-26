angular.module( 'product', [
  'ngResource'
])

.factory('Product', function ($resource) {
  return $resource('/products/:productId', {productId:'@id'});
})

;
