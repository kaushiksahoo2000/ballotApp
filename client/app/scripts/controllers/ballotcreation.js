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
            "ballotOptionOne": $scope.choices[0] ? $scope.choices[0].name : 'NULL',
            "ballotOptionTwo": $scope.choices[1] ? $scope.choices[1].name : 'NULL',
            "ballotOptionThree": $scope.choices[2] ? $scope.choices[2].name : 'NULL',
            "ballotOptionFour": $scope.choices[3] ? $scope.choices[3].name : 'NULL',
            "ballotOptionFive": $scope.choices[4] ? $scope.choices[4].name : 'NULL'
          }
        }).then(function(success){
          console.log(success);
        }, function(err){
          console.log('THIS IS AN ERROR!');
        });
    };
  });
