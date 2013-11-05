angular.module('security.authInterceptor', [])

// This http interceptor listens for authentication failures
.factory('authInterceptor', function($injector, $q, $rootScope) {
  return function(promise) {
    // Intercept failed requests
    return promise.then(null, function(response) {
      if(response.status === 401) {
        var deferred = $q.defer();

        var auth = $injector.get('auth');

        $rootScope.$broadcast('event:authRequired');

        return deferred.promise;
      }
      return promise;
    });
  };
})

.config(['$httpProvider', function($httpProvider) {
  $httpProvider.responseInterceptors.push('authInterceptor');
}]);
