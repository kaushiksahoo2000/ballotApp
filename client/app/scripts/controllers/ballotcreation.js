'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:BallotCreationCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('BallotCreationCtrl', function ($scope, $http) {
    $scope.choices = [{choice:'choice1'},{choice:'choice2'},{choice:'choice3'}];
    $scope.addNewChoice = function(){
      var newItemNo = $scope.choices.length+1;
      $scope.choices.push({'choice':'choice'+newItemNo});
    };
    $scope.generateBallot = function(){
      console.log($scope.choices);
      $http({
          method  : 'POST',
          url     : '/api/ballots',
          data    : {
            "ballotName": $scope.choices.topic,
            "userId": "4",
            "ballotCode": $scope.choices.code,
            "ballotOptionOne": "fklsdf",
            "ballotOptionTwo": "asd;klfjasdf"
          }
        }).then(function(success){
          console.log(success);
        }, function(err){
          console.log('THIS IS AN ERROR!');
        });
    };
  });
