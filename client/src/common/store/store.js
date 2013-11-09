angular.module( 'store', [
  'product',
  'category',
  'cart'
])


.factory('store', function (Product, Category, cart) {
  var _currentCategory = null;

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
      var product = new Product(productData);
      return product.$save();
    },
    updateProduct: function(productData){
      productData.$save();
    },
    getCategories: function(){
      return Category.query();
    },
    getCategory: function(categoryId){
      return Category.get({categoryId: categoryId});
    },
    addCategory: function(categoryData){
      var category = new Category(categoryData);
      return category.$save();
    },
    updateCategory: function(categoryData){
      categoryData.$save();
    },
    cart: cart,
    getCurrentCategory: function(){
      return _currentCategory;
    },
    setCurrentCategory: function(categoryId){
      _currentCategory = categoryId;
    }
  };
})

;
