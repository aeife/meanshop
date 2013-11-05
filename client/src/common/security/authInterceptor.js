angular.module('security.authInterceptor', [])

// This http interceptor listens for authentication failures
.factory('authInterceptor', function($injector, $q) {
  return function(promise) {
    // Intercept failed requests
    return promise.then(null, function(response) {
      if(response.status === 401) {
        var deferred = $q.defer();

        var $modal = $injector.get('$modal');

        var model = $modal.open({
          backdrop: true,
          keyboard: true,
          backdropClick: true,
          templateUrl: 'loginDialog/loginDialog.tpl.html',
          controller: 'LoginDialogCtrl'
        });
        model.result.then(function(result){
          if(result){
            alert('model closed with result: ' + result);
          }
        });

        return deferred.promise;
      }
      return promise;
    });
  };
})

.config(['$httpProvider', function($httpProvider) {
  $httpProvider.responseInterceptors.push('authInterceptor');
}]);
