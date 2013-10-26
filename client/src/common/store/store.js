angular.module( 'store', [
  'product'
])


.factory('store', function (Product) {
  // var Product = $resource('/product/:productId', {productId:'@id'});
  return {
    getAllProducts: function(){
      return Product.query();
    },
    getProduct: function(productId){
      return Product.get({productId: productId});
    },
    getProductsByCategory: function(cat){
      return Product.query({categoryId: cat});
    }
  };
})

;
