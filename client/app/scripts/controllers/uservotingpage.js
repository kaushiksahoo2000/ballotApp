'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:UserVotingPageCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('UserVotingPageCtrl',function($scope, $http, $rootScope){

    $http.get("/api/ballots")
    .success(function(data){
      $scope.ballotData = data;
      console.log("this is $scope.ballotData", $scope.ballotData);
      console.log("this is $scope.ballotData.")

    });

    $scope.voters = [
      {
        voterId: 1,
        voter: 'John',
      },
      {
        voterId: 2,
        voter: 'Andy',
      },
      {
        voterId: 3,
        voter: 'Jeff',
      }
    ];

    $scope.choices = [
      {
        filterId: 1,
        choice: 'Chipotle',
      },
      {
        filterId: 2,
        choice: 'Bennies',
      },
      {
        filterId: 3,
        choice: 'Chophouse',
      }
    ];
    $scope.selectedIndex = 0;

    $scope.select = function(i){
      $scope.selectedIndex = i;
    };

    $scope.endVoting = function(){
      console.log("inside endVoting function");
    };
  });














  // $scope.userVotingInfo = [];
  // $scope.saveData = function(){
  //   console.log($scope.userVotingInfo);
  // };
