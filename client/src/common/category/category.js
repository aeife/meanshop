angular.module( 'category', [
  'ngResource'
])

.factory('Category', function ($resource) {
  return $resource('/categories/:categoryId', {categoryId:'@id'});
})

;
