angular.module( 'store', [
  'product'
])


.factory('store', function (Product) {
  return {
    getProducts: function(){
      return Product.query();
    },
    getProductsByCategory: function(cat){
      return Product.query({categoryId: cat});
    },
    getProduct: function(productId){
      return Product.get({productId: productId});
    }
  };
})

;
