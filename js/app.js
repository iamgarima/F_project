var myApp = angular.module('myApp', ['ngMessages', 'ngResource', 'ngRoute']);


myApp.config(function($routeProvider) {
  $routeProvider
    .when('/first', {
      templateUrl: 'js/pages/first.html',
      controller: 'appController'
    })
    .when('/second', {
      templateUrl: 'js/pages/second.html',
      controller: 'appController'
    })
    .when('/third', {
      templateUrl: 'js/pages/third.html',
      controller: 'appController'
    })
});

// myApp.directive('', function() {
//   return {
//     restrict: 'E',
//     templateUrl: 'dir.html',
//     replace: true
//   };
// });

myApp.controller('appController', ['$scope', '$log', function($scope, $log) {

  $scope.name = '';
  $scope.nameArr = [];
  $scope.clicked = function() {
    $scope.nameArr.push($scope.name);
    $('label').hide();
  };
  $scope.first = '';
  $scope.answerArr = [];
  $scope.firstRadioClicked = function() {
    $scope.answerArr.push($("input[name='petChoice']:checked").val());
    $('div').hide();
  };
  $scope.second = '';
  $scope.firstRadioClicked = function() {
    $scope.answerArr.push($("input[name='colorChoice']:checked").val());
    $('div').hide();
  };



}]);
