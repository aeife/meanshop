describe( 'shop product edit section', function() {
  var $scope, $httpBackend;

  beforeEach(module('meanShop.shop.productEdit'));
  beforeEach(module('store'));

  beforeEach(inject(function ($rootScope, _$httpBackend_, $controller ){
    $scope = $rootScope.$new;
    $httpBackend = _$httpBackend_;
    $controller('ProductEditCtrl', {$scope: $scope, $stateParams: {product: 123}});
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should asign fetched data to scope', inject( function() {
    $httpBackend.whenGET('/products/123').respond(200, {title: 'Product1', category: {_id: 1}});
    $httpBackend.whenGET('/categories').respond([{_id: 1, title: 'testCat1'}, {_id: 2, title: 'testCat2'}]);

    $httpBackend.flush();
    expect($scope.product.title).toBe('Product1');
    expect($scope.categories.length).toBe(2);
    expect($scope.categories[0].title).toBe('testCat1');
  }));

  it('should set product category as reference after all data fetched', inject( function() {
    $httpBackend.whenGET('/products/123').respond(200, {title: 'Product1', category: {title: 'testCat2'}});
    $httpBackend.whenGET('/categories').respond([{title: 'testCat1'}, {title: 'testCat2'}]);

    $httpBackend.flush();
    expect($scope.product.category).toBe($scope.categories[1]);
  }));


});

