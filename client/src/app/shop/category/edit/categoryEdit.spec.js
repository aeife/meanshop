describe( 'shop category edit section', function() {
  var $scope, $httpBackend;

  beforeEach(module('meanShop.shop.categoryEdit'));
  beforeEach(module('store'));

  beforeEach(inject(function ($rootScope, _$httpBackend_, $controller ){
    $scope = $rootScope.$new;
    $httpBackend = _$httpBackend_;
    $controller('CategoryEditCtrl', {$scope: $scope, $stateParams: {category: 123}});
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should asign fetched data to scope', inject( function() {
    $httpBackend.whenGET('/categories/123').respond(200, {title: 'Category1'});

    $httpBackend.flush();
    expect($scope.category.title).toBe('Category1');
  }));
});

