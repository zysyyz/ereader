angular.module('tabbar').controller('TabBarController', ['$scope',
  function($scope) {

    $scope.page = 'index';
    $scope.items = [ {page:'index'}, {page:'library'}, {page:'paihang'}, {page:'mycenter'} ];

    $scope.changeTab = function(item) {
      $scope.page = item.page;
    }

  }
]);