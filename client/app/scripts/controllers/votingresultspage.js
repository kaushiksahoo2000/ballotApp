'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:VotingResultsPageCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('VotingResultsPageCtrl',function($scope, $http, $rootScope, $timeout){
    $timeout(function(){
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
      // angular.forEach($scope.votingResultsArray,function(value,index){
      //   console.log("this is the ballot_option value in forEach", value.ballot_option_name);
      //   $scope.results[index].result = value.ballot_option_name;
      //   console.log("this is $scope.results[index].result", $scope.results[index].result);
      // });
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

  });
}, 2000);
