var myApp = angular.module('myApp', ['ngMessages', 'ngResource', 'ngRoute']);



myApp.config(function($routeProvider) {
  $routeProvider
    .when('/questions', {
      templateUrl: 'js/pages/questions.html',
      controller: 'appController'
    })
});

myApp.controller('appController', ['$scope', function($scope) {
  $scope.questions = [
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
  $scope.result = 'dogs';
  var currentQuestionNumber = 0;
  $scope.currentQuestion = $scope.questions[currentQuestionNumber];
  $scope.correct = [];
  $scope.incorrect = [];
  $scope.next = function() {

    $scope.currentQuestion.userAnswer = $scope.result;

    if($scope.currentQuestion.ans === $scope.result) {
      $scope.correct.push($scope.result);
    }
    else {
      $scope.incorrect.push($scope.result);
    };
    if(currentQuestionNumber < $scope.questions.length) {
      $scope.currentQuestion = $scope.questions[currentQuestionNumber];
      $('#qlist').hide();
    }
    else {
      $('#quest').hide();
      $('#qlist').show();
    };
    ++currentQuestionNumber;

  };
  $('#qlist').hide();
  $scope.name = '';
  $scope.nameArr = [];
  $scope.clicked = function() {
    $scope.nameArr.push($scope.name);
    $('label').hide();

  };

}]);
