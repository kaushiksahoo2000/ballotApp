'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:BallotInitiationCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('BallotInitiationCtrl',function($scope, $rootScope){
    $rootScope.randomCode = (new Date()).getTime().toString().slice(8);
    $scope.enterBallotCode = function(){
      $rootScope.userGivenCode = $scope.userGivenCode;
      console.log("this is $rootScope.userGivenCode", $rootScope.userGivenCode);
    };

    $scope.ballotCreation = function(){
      console.log($rootScope.randomCode);
    }
  });
