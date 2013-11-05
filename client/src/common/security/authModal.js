angular.module('security.authModal', [])

.factory('authModal', function($rootScope, $modal) {
  $rootScope.$on('event:authRequired', function(){
    authModal.open();
  });

  var authModal = {
    open: function(){
      var modal = $modal.open({
        backdrop: true,
        keyboard: true,
        backdropClick: true,
        templateUrl: 'loginDialog/loginDialog.tpl.html',
        controller: 'LoginDialogCtrl'
      });
      modal.result.then(function(result){
        if(result){
          alert('model closed with result: ' + result);
        }
      });
    }
  };

  return authModal;
});
