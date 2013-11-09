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
      expect(products[0].name).toEqual('Product1');
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

      $httpBackend.flush();

      expect(products.length).toEqual(2);
    }));

    it('should add a new product', inject( function() {
      $httpBackend
      .expectPOST('/products', {
        name: 'Product1'
      })
      .respond(201, '');

      var product = store.addProduct({name: 'Product1'});

      $httpBackend.flush();
    }));

    it('should update a product', inject( function() {
      // get product first
      var mockData = [{name: 'Product1'}, {name: 'Product2'}];

      $httpBackend
      .whenGET('/products?categoryId=1')
      .respond(mockData);

      var products = store.getProductsByCategory(1);

      $httpBackend.flush();

      $httpBackend
      .expectPOST('/products', {
        name: 'Product1a'
      })
      .respond(201, '');

      products[0].name = 'Product1a';

      store.updateProduct(products[0]);

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

    it('should add a new category', inject( function() {
      $httpBackend
      .expectPOST('/categories', {
        name: 'Category1'
      })
      .respond(201, '');

      var category = store.addCategory({name: 'Category1'});

      $httpBackend.flush();
    }));

    it('should update a category', inject( function() {
      // get product first
      var mockData = [{name: 'Category1'}, {name: 'Category2'}];

      $httpBackend
      .whenGET('/categories')
      .respond(mockData);

      var categpries = store.getCategories();

      $httpBackend.flush();

      $httpBackend
      .expectPOST('/categories', {
        name: 'Category1a'
      })
      .respond(201, '');

      categpries[0].name = 'Category1a';

      store.updateCategory(categpries[0]);

      $httpBackend.flush();
    }));

  });

  it('should set current category', inject( function() {
      store.setCurrentCategory(123);

      expect(store.getCurrentCategory()).toBe(123);
    }));
});
