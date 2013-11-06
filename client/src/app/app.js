angular.module( 'meanShop', [
  'templates-app',
  'templates-common',
  'meanShop.home',
  'meanShop.about',
  'meanShop.login',
  'loginWidget',
  'cartWidget',
  'meanShop.shop',
  'ui.router',
  'ui.bootstrap',
  'store',
  'auth',
  'ngCookies',
  'meanShop.loginDialog',
  'security.authInterceptor',
  'security.authModal'
])

.config( function myAppConfig ($stateProvider, $urlRouterProvider) {
  var authResolver = {
    'auth' : function(auth) {
      return auth.isLoggedIn();
    }
  };

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
  .state('login', {
    url: '/login',
    views: {
      "main": {
        controller: 'LoginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  })
  .state('sidebarView.shop', {
    url: '/shop',
    views: {
      "main": {
        controller: 'ShopCtrl',
        templateUrl: 'shop/shop.tpl.html'
      },
      "sidebar": {
        controller: 'ShopSidebarCtrl',
        templateUrl: 'shop/sidebar/shopSidebar.tpl.html'
      }
    },
    data:{pageTitle: 'Shop'}
  })
  .state('cart', {
    url: '/shop/cart',
    views: {
      "main": {
        controller: 'ShopCartCtrl',
        templateUrl: 'shop/cart/shopCart.tpl.html'
      }
    },
    data:{pageTitle: 'Shop'}
  })
  .state('sidebarView.shop.category', {
    url: '/:category',
    views: {
      "main": {
        controller: 'ProductListCtrl',
        templateUrl: 'shop/product/list/productList.tpl.html'
      }
    },
    data:{pageTitle: 'Shop'}
  })
  .state('sidebarView.shop.product', {
    url: '/product/:product',
    views: {
      "main": {
        controller: 'ProductDetailCtrl',
        templateUrl: 'shop/product/detail/productDetail.tpl.html'
      }
    },
    data:{pageTitle: 'Shop'}
  });
})

.run( function run (authModal) {
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

