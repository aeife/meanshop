angular.module( 'store', [
  'product'
])


.factory('store', function (product) {
  // var Product = $resource('/product/:productId', {productId:'@id'});
  return {
    getAllProducts: function(){
      return product.query();
    },
    getProduct: function(productId){
      return product.get({productId: productId});
    }
  };
})

;
