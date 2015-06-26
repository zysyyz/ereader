angular.module('tabbar').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'module/tabbar/views/index.client.view.html',
        controller: 'TabBarController'
      }).
      when('/library', {
        templateUrl: 'module/tabbar/views/library.client.view.html',
        controller: 'TabBarController'
      }).
      when('/paihang', {
        templateUrl: 'module/tabbar/views/paihang.client.view.html',
        controller: 'TabBarController'
      }).
      when('/mycenter', {
        templateUrl: 'module/tabbar/views/mycenter.client.view.html',
        controller: 'TabBarController'
      }).
      otherwise({
        redirectTo: '/'
      }); }
]);