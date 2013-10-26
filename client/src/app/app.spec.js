describe( 'AppCtrl', function() {
  describe( 'isCurrentUrl', function() {
    var AppCtrl, $location, $scope, $state;

    beforeEach( module( 'meanShop' ) );

    beforeEach(module(function ($stateProvider) {
      $stateProvider.state('testState', { url: '/', data:{ } });
    }));

    beforeEach( inject( function( $controller, _$location_, $rootScope, _$state_) {
      $location = _$location_;
      $scope = $rootScope.$new();
      $state = _$state_;
      AppCtrl = $controller( 'AppCtrl', { $location: $location, $scope: $scope });
    }));



    it( 'should pass a dummy test', inject( function() {
      expect( AppCtrl ).toBeTruthy();
    }));

    it('should change title on state change', inject(function($state, $q){
      $state.transitionTo('home', {});
      $scope.$apply();

      expect($scope.pageTitle).toBe('Home | MeanShop');
    }));

    it('should change use default title if not in state', inject(function($state, $q){
      $state.transitionTo('testState', {});
      $scope.$apply();

      expect($scope.pageTitle).toBe('MeanShop');
    }));

    it('should only display current title after multiple changes', inject(function($state, $q){
      $state.transitionTo('about', {});
      $scope.$apply();

      $state.transitionTo('home', {});
      $scope.$apply();

      expect($scope.pageTitle).toBe('Home | MeanShop');
    }));

  });
});
