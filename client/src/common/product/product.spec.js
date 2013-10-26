describe( 'product factory', function() {
  var product, $httpBackend;

  beforeEach(module('product'));

  beforeEach(inject(function (_product_, _$httpBackend_){
    product = _product_;
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

    var products = product.query();

    $httpBackend.flush();

    expect(products.length).toEqual(2);
  }));
});
