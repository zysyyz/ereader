var mainApplicationModuleName = 'ereader';
var mainApplicationModule =angular.module(mainApplicationModuleName, ['ngRoute', 'tabbar']);
mainApplicationModule.config(['$locationProvider',
     function($locationProvider) {
       $locationProvider.hashPrefix('!');
     }
]);

angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});
