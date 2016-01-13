'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:BallotInitiationCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('BallotInitiationCtrl',function($scope){
    $scope.randomCode = (new Date()).getTime().toString().slice(8);
    $scope.ballotInitiationInfo = [];
    $scope.saveData = function(){
      console.log($scope.ballotInitiationInfo);
    };

    $scope.ballotCreation = function(){
      console.log($scope.ballotInitiationInfo);
      console.log($scope.randomCode);
    }
  });
