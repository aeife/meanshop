describe( 'product factory', function() {
  var Category, $httpBackend;

  beforeEach(module('category'));

  beforeEach(inject(function (_Category_, _$httpBackend_){
    Category = _Category_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should get all categories', inject( function() {
    var mockData = [{title: 'Category1'}, {title: 'Category2'}];

    $httpBackend
    .whenGET('/categories')
    .respond(mockData);

    var categories = Category.query();

    $httpBackend.flush();

    expect(categories.length).toEqual(2);
  }));
});
