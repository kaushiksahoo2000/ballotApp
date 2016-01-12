'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:VotingResultsPageCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('VotingResultsPageCtrl',function($scope){
    $scope.votingResultsInfo = [];
    $scope.saveResults = function(){
      console.log("inside saveResults function");
    };
  });
