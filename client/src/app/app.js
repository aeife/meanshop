angular.module( 'meanShop', [
  'templates-app',
  'templates-common',
  'meanShop.home',
  'meanShop.about',
  'meanShop.login',
  'loginWidget',
  'cartWidget',
  'adminWidget',
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

  .state('sidebarView.shop.product', {
    abstract: true,
    views: {
      "main": {
        template: '<ui-view/>'
      }
    },
  })
  .state('sidebarView.shop.product.list', {
    url: '/:category',
    controller: 'ProductListCtrl',
    templateUrl: 'shop/product/list/productList.tpl.html',
    data:{pageTitle: 'Product'}
  })
  .state('sidebarView.shop.product.new', {
    url: '/product/new',
    controller: 'ProductNewCtrl',
    templateUrl: 'shop/product/new/productNew.tpl.html',
    data:{pageTitle: 'Product'}
  })
  .state('sidebarView.shop.product.detail', {
    url: '/product/:product',
    controller: 'ProductDetailCtrl',
    templateUrl: 'shop/product/detail/productDetail.tpl.html',
    data:{pageTitle: 'Product'}
  })
  .state('sidebarView.shop.product.edit', {
    url: '/product/:product/edit',
    controller: 'ProductEditCtrl',
    templateUrl: 'shop/product/edit/productEdit.tpl.html',
    data:{pageTitle: 'Product'}
  })

  .state('sidebarView.shop.category', {
    abstract: true,
    views: {
      "main": {
        template: '<ui-view/>'
      }
    },
  })
  .state('sidebarView.shop.category.new', {
    url: '/category/new',
    controller: 'CategoryNewCtrl',
    templateUrl: 'shop/category/new/categoryNew.tpl.html',
    data:{pageTitle: 'Category'}
  })
  .state('sidebarView.shop.category.edit', {
    url: '/category/:category/edit',
    controller: 'CategoryEditCtrl',
    templateUrl: 'shop/category/edit/categoryEdit.tpl.html',
    data:{pageTitle: 'Category'}
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

