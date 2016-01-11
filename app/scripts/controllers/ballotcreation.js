'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:BallotCreationCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('ballotTempApp')
  .controller('BallotCreationCtrl', function ($scope) {
    $scope.choices = [{choice:'choice1'},{choice:'choice2'},{choice:'choice3'}];
    $scope.addNewChoice = function(){
      var newItemNo = $scope.choices.length+1;
      $scope.choices.push({'choice':'choice'+newItemNo});
    };
    $scope.saveData = function(){
      console.log($scope.choices);
    };
  });
