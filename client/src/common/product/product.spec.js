describe( 'product factory', function() {
  var Product, $httpBackend;

  beforeEach(module('product'));

  beforeEach(inject(function (_Product_, _$httpBackend_){
    Product = _Product_;
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

    var products = Product.query();

    $httpBackend.flush();

    expect(products.length).toEqual(2);
  }));
});
