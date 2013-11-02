angular.module( 'cart', [

])


.factory('cart', function () {

  var items = [];

  var checkIfProductExists = function(product){
    for (var i = 0, len = items.length; i < len; i++){
      if (angular.equals(items[i].product, product)){
        return items[i];
      }
    }
    return false;
  };

  return {
    getItems: function(){
      return items;
    },
    addItem: function(product){
      var existingProduct = checkIfProductExists(product);
      if (checkIfProductExists(product)){
        existingProduct.quantity++;
      } else {
        items.push({product: product, quantity: 1});
      }
    },
    removeItem: function(index){
      items.splice(index, 1);
    },
    lowerQuantity: function(index){
      items[index].quantity--;
      if (items[index].quantity === 0){
        this.removeItem(index);
      }
    },
    clear: function(){
      items = [];
    }
  };
})

;
