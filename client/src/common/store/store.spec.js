describe( 'store factory', function() {
  var store, $httpBackend;

  beforeEach(module('store'));

  beforeEach(inject(function (_store_, _$httpBackend_){
    store = _store_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe( 'store product methods', function() {

    it('should get all products', inject( function() {
      var mockData = [{name: 'Product1'}, {name: 'Product2'}];

      $httpBackend
      .whenGET('/products')
      .respond(mockData);

      var products = store.getProducts();

      $httpBackend.flush();

      expect(products.length).toEqual(2);
    }));

    it('should get specific products', inject( function() {
      var mockData = {name: 'Product1'};

      $httpBackend
      .whenGET('/products/1')
      .respond(mockData);

      var product = store.getProduct(1);

      $httpBackend.flush();

      expect(product.name).toEqual('Product1');
    }));

    it('should get products of category', inject( function() {
      var mockData = [{name: 'Product1', categoryId: 1}, {name: 'Product2', categoryId: 1}];

      $httpBackend
      .whenGET('/products?categoryId=1')
      .respond(mockData);

      var products = store.getProductsByCategory(1);
      console.log(products);
      $httpBackend.flush();

      expect(products.length).toEqual(2);
    }));

    it('should add a new product', inject( function() {
      $httpBackend
      .expectPOST('/products', {
        name: 'Product1'
      })
      .respond(201, '');

      var products = store.addProduct({name: 'Product1'});

      $httpBackend.flush();
    }));

  });

  describe( 'store category methods', function() {

    it('should get all categories', inject( function() {
      var mockData = [{title: 'Category1'}, {title: 'Category2'}];

      $httpBackend
      .whenGET('/categories')
      .respond(mockData);

      var categories = store.getCategories();

      $httpBackend.flush();

      expect(categories.length).toEqual(2);
    }));

  });
});
