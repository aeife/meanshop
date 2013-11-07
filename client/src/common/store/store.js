angular.module( 'store', [
  'product',
  'category',
  'cart'
])


.factory('store', function (Product, Category, cart) {
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
    updateProduct: function(productData){
      productData.$save();
    },
    getCategories: function(){
      return Category.query();
    },
    cart: cart
  };
})

;
