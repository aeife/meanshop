angular.module( 'store', [
  'product',
  'category'
])


.factory('store', function (Product, Category) {
  return {
    getProducts: function(){
      return Product.query();
    },
    getProductsByCategory: function(cat){
      return Product.query({categoryId: cat});
    },
    getProduct: function(productId){
      return Product.get({productId: productId});
    },
    addProduct: function(productData){
      var product = new Product({
        name: productData.name
      });
      return product.$save();
    },
    getCategories: function(){
      return Category.query();
    }
  };
})

;
