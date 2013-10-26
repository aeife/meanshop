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

  it('should get all products', inject( function() {
    var mockData = [{name: 'Product1'}, {name: 'Product2'}];

    $httpBackend
    .whenGET('/product')
    .respond(mockData);

    var products = store.getAllProducts();

    $httpBackend.flush();

    expect(products.length).toEqual(2);
  }));

  it('should get specific products', inject( function() {
    var mockData = {name: 'Product1'};

    $httpBackend
    .whenGET('/product/1')
    .respond(mockData);

    var product = store.getProduct(1);

    $httpBackend.flush();

    expect(product.name).toEqual('Product1');
  }));

  it('should get products of category', inject( function() {
    var mockData = [{name: 'Product1', categoryId: 1}, {name: 'Product2', categoryId: 1}];

    $httpBackend
    .whenGET('/product?categoryId=1')
    .respond(mockData);

    var products = store.getProductsByCategory(1);
    console.log(products);
    $httpBackend.flush();

    expect(products.length).toEqual(2);
  }));
});
