angular.module( 'meanShop', [
  'templates-app',
  'templates-common',
  'meanShop.home',
  'meanShop.about',
  'meanShop.shop',
  'meanShop.shop.cartWidget',
  'ui.router',
  'store'
])

.config( function myAppConfig ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('sidebarView', {
    abstract: true,
    views: {
      "main": {
        templateUrl: 'layouts/sidebarView.tpl.html'
      }
    },
    data:{pageTitle: 'Shop'}
  })
  .state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  })
  .state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{ pageTitle: 'About' }
  })
  .state('sidebarView.shop', {
    url: '/shop',
    views: {
      "main": {
        controller: 'ShopCtrl',
        templateUrl: 'shop/shop.tpl.html'
      },
      "sidebarTop": {
        controller: 'CartWidgetCtrl',
        templateUrl: 'shop/cartWidget/cartWidget.tpl.html'
      },
      "sidebar": {
        controller: 'CategoryChooserCtrl',
        templateUrl: 'shop/categoryChooser/categoryChooser.tpl.html'
      }
    },
    data:{pageTitle: 'Shop'}
  })
  .state('sidebarView.shop.cart', {
    url: '/cart',
    views: {
      "main": {
        controller: 'ShopCartCtrl',
        templateUrl: 'shop/shopCart/shopCart.tpl.html'
      }
    },
    data:{pageTitle: 'Shop'}
  })
  .state('sidebarView.shop.category', {
    url: '/:category',
    views: {
      "main": {
        controller: 'ShopCategoryCtrl',
        templateUrl: 'shop/shopCategory/shopCategory.tpl.html'
      }
    },
    data:{pageTitle: 'Shop'}
  })
  .state('sidebarView.shop.product', {
    url: '/product/:product',
    views: {
      "main": {
        controller: 'ShopProductCtrl',
        templateUrl: 'shop/shopProduct/shopProduct.tpl.html'
      }
    },
    data:{pageTitle: 'Shop'}
  });
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ($scope, $location, $state) {
  $scope.$state = $state;

  $scope.pageTitle = 'MeanShop';
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | MeanShop';
    }
  });
})

;

