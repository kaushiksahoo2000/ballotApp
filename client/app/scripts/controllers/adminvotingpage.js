'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:AdminVotingPageCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('AdminVotingPageCtrl',function($scope, $http, $rootScope){
    console.log("This is the randomly generated code", $scope.randomCode);
    $http.get("/api/ballots/" + $scope.randomCode)
    .success(function(data){
      $scope.ballotData = data;
      console.log("this is $scope.ballotData", $scope.randomCode);
      $scope.choices[0].choice = $scope.ballotData.data.ballot_option_one;
      $scope.choices[1].choice = $scope.ballotData.data.ballot_option_two;
      $scope.choices[2].choice = $scope.ballotData.data.ballot_option_three;
      $scope.choices[3].choice = $scope.ballotData.data.ballot_option_four;
      $scope.choices[4].choice = $scope.ballotData.data.ballot_option_five;
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
      },
      {
        filterId: 2,
      },
      {
        filterId: 3,
      },
      {
        filterId: 4,
      },
      {
        filterId: 5,
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
