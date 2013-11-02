angular.module( 'cart', [

])


.factory('cart', function () {

  var items = [];

  var checkIfProductExists = function(product){
    for (var i = 0, len = items.length; i < len; i++){
      if (angular.equals(items[i].product, product)){
        return i;
      }
    }
    return false;
  };

  return {
    getItems: function(){
      return items;
    },
    addItem: function(product){
      var existingProductIndex = checkIfProductExists(product);
      if (existingProductIndex !== false){
        this.increaseQuantity(existingProductIndex);
      } else {
        items.push({product: product, quantity: 1});
      }
    },
    removeItem: function(index){
      items.splice(index, 1);
    },
    increaseQuantity: function(index){
      items[index].quantity++;
    },
    decreaseQuantity: function(index){
      items[index].quantity--;
      if (items[index].quantity === 0){
        this.removeItem(index);
      }
    },
    clear: function(){
      items = [];
    },
    getTotalPrice: function(){
      var totalPrice = 0;
      for (var i = 0, len = items.length; i < len; i++){
        totalPrice = parseFloat((totalPrice + (items[i].product.price * items[i].quantity)).toFixed(10));
      }
      return totalPrice;
    }
  };
})

;
