'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:VotingResultsPageCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('VotingResultsPageCtrl',function($scope, $http, $rootScope, $timeout, $interval){
    $timeout(function(){
      $interval(function(){
    $scope.finalCode = $rootScope.userGivenGivenCode || $rootScope.adminGivenGivenCode;
    $http.get("/api/ballots/" + $scope.finalCode)
    .then(function(data){
      $scope.ballotData = data;
      console.log($scope.ballotData);
      console.log("this is the user vote array in votingresults", $scope.ballotData.data.data.user_vote);
      $scope.votingResultsArray = $scope.ballotData.data.data.user_vote;
      $scope.results[0].ballotOption = $scope.ballotData.data.data.ballot_option_one;
      $scope.results[1].ballotOption = $scope.ballotData.data.data.ballot_option_two;
      $scope.results[2].ballotOption = $scope.ballotData.data.data.ballot_option_three;
      $scope.results[3].ballotOption = $scope.ballotData.data.data.ballot_option_four;
      $scope.results[4].ballotOption = $scope.ballotData.data.data.ballot_option_five;
      console.log("THIS IS THE SCOPE.RESULT ARRAY", $scope.results);
      angular.forEach($scope.results, function(value,index){
        angular.forEach($scope.votingResultsArray, function(individualValue,position){
          if(individualValue.ballot_option_name === value.ballotOption){
            value.filterId++;
          }
        })
      });
      console.log("line 33 this is the winning vote count",Math.max.apply(Math,$scope.results.map(function(o){return o.filterId;})));
      $scope.maxVoteResultCount = Math.max.apply(Math,$scope.results.map(function(o){return o.filterId;}));
      console.log("line 35 this is the winning vote count in variable form", $scope.maxVoteResultCount);


      angular.forEach($scope.results, function(value, index){
        if(value.filterId === $scope.maxVoteResultCount){
          console.log("this is the winner", value.ballotOption);
          $scope.theFinalWinner = value.ballotOption;
        }
        console.log("this is the winner but in variable form w/ $scope.theFinalWinner", $scope.theFinalWinner);
      });
    });


    $scope.saveResults = function(){
      console.log("inside saveResults function");

    };

    $scope.results = [
      {
        filterId: 0,
      },
      {
        filterId: 0,
      },
      {
        filterId: 0,
      },
      {
        filterId: 0,
      },
      {
        filterId: 0,
      }
    ];
  }, 6000);
  }, 3000);
  });
