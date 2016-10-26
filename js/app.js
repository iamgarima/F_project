var myApp = angular.module('myApp', ['ngMessages', 'ngResource', 'ngRoute']);

var questions = [
  {
    'statement': 'Which is your fav pet?',
    'options': ['http://placehold.it/300/text=garima+rocks', 'http://placehold.it/300/text=garima+lols', 'http://placehold.it/300/text=garima+walks'],
    'ans': 'http://placehold.it/300/text=garima+rocks'
  },
  {
    'statement': 'What is your favourite color?',
    'options': ['http://placehold.it/300/text=garima+rocks', 'http://placehold.it/300/text=garima+lols', 'http://placehold.it/300/text=garima+walks'],
    'ans': 'http://placehold.it/300/text=garima+rocks'
  },
  {
    'statement': 'What is your hobby?',
    'options': ['http://placehold.it/300/text=garima+rocks', 'http://placehold.it/300/text=garima+lols', 'http://placehold.it/300/text=garima+walks'],
    'ans': 'http://placehold.it/300/text=garima+rocks'
  },
  {
    'statement': 'In which language do you like to program?',
    'options': ['http://placehold.it/300/text=garima+rocks', 'http://placehold.it/300/text=garima+lols', 'http://placehold.it/300/text=garima+walks'],
    'ans': 'http://placehold.it/300/text=garima+rocks'
  },
  {
    'statement': 'Which is your favourite company?',
    'options': ['http://placehold.it/300/text=garima+rocks', 'http://placehold.it/300/text=garima+lols', 'http://placehold.it/300/text=garima+walks'],
    'ans': 'http://placehold.it/300/text=garima+rocks'
  }

];

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/questions', {
      templateUrl: 'js/pages/questions.html',
      controller: 'appController'
    })
});

myApp.controller('appController', ['$scope', function($scope) {
  $scope.result = 'dogs';
  var currentQuestionNumber = 0;
  $scope.currentQuestion = questions[currentQuestionNumber];

  $scope.next = function() {
    ++currentQuestionNumber
    if(currentQuestionNumber < questions.length) {
      $scope.currentQuestion = questions[currentQuestionNumber];
      $('#qlist').hide();
    }
    else {
      $('#qlist').show();
    }
  };

  $scope.name = '';
  $scope.nameArr = [];
  $scope.clicked = function() {
    $scope.nameArr.push($scope.name);
    $('label').hide();
  };

}]);
