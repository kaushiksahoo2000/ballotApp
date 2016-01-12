'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:UserVotingPageCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('UserVotingPageCtrl',function($scope){
    $scope.userVotingInfo = [];
    $scope.saveData = function(){
      console.log($scope.userVotingInfo);
    };
  });
