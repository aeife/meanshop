describe( 'cart factory', function() {
  var cart, $httpBackend;

  beforeEach(module('cart'));

  beforeEach(inject(function (_cart_){
    cart = _cart_;
  }));

  describe('add item', function() {

    it('should start with empty cart', inject( function() {
      expect(cart.getItems().length).toEqual(0);
    }));

    it('should add new items', inject( function() {
      cart.addItem({title: 'Product1'});
      cart.addItem({title: 'Product2'});

      expect(cart.getItems().length).toEqual(2);
      expect(cart.getItems()[0].product).toEqual({title: 'Product1'});
    }));

    it('should add quantity to added product', inject( function() {
      cart.addItem({title: 'Product1'});

      expect(cart.getItems()[0].quantity).toEqual(1);
    }));

    it('should not add the same product twice', inject( function() {
      cart.addItem({title: 'Product1'});
      cart.addItem({title: 'Product1'});

      expect(cart.getItems().length).toEqual(1);
    }));

    it('should adjust quantity when adding same product', inject( function() {
      cart.addItem({title: 'Product1'});
      cart.addItem({title: 'Product1'});

      expect(cart.getItems()[0].quantity).toEqual(2);
    }));

  });

  describe('remove item', function() {

    it('should remove item', inject( function() {
      cart.addItem({title: 'Product1'});
      cart.removeItem(0);

      expect(cart.getItems().length).toEqual(0);
    }));

    it('should remove correct item', inject( function() {
      cart.addItem({title: 'Product1'});
      cart.addItem({title: 'Product2'});
      cart.addItem({title: 'Product3'});
      cart.removeItem(1);

      expect(cart.getItems().length).toEqual(2);
      expect(cart.getItems()[0].product.title).toEqual('Product1');
      expect(cart.getItems()[1].product.title).toEqual('Product3');
    }));

    it('should not remove anything on false index', inject( function() {
      cart.addItem({title: 'Product1'});
      cart.addItem({title: 'Product2'});
      cart.removeItem(2);

      expect(cart.getItems().length).toEqual(2);
    }));

  });

  describe('decrease quantity', function() {

    it('should decrease quantity', inject( function() {
      cart.addItem({title: 'Product1'});
      cart.addItem({title: 'Product1'});
      cart.decreaseQuantity(0);

      expect(cart.getItems()[0].quantity).toEqual(1);
    }));

    it('should remove item when decreasing quantity to zero', inject( function() {
      cart.addItem({title: 'Product1'});
      cart.decreaseQuantity(0);

      expect(cart.getItems().length).toEqual(0);
    }));

  });


  it('should empty whole cart', inject( function() {
    cart.addItem({title: 'Product1'});
    cart.addItem({title: 'Product1'});
    cart.addItem({title: 'Product2'});
    cart.clear();

    expect(cart.getItems().length).toEqual(0);
  }));


  describe('get total price', function() {

    it('should get zero if no items', inject( function() {
      expect(cart.getTotalPrice()).toEqual(0);
    }));

    it('should get total price', inject( function() {
      cart.addItem({title: 'Product1', price: 11.20, quantity: 1});
      cart.addItem({title: 'Product1', price: 7.22, quantity: 1});
      cart.addItem({title: 'Product2', price: 49.12, quantity: 1});

      expect(cart.getTotalPrice()).toEqual(67.54);
    }));
  });

});
