'use strict';

angular.module('BallotizeApp')
.controller('VotingResultsPageCtrl',function($scope, $http, $rootScope, $timeout, $interval) {
  $timeout(function(){
    $interval(function() {
      $scope.finalCode = $rootScope.userGivenCode || $rootScope.adminGivenGivenCode;
      $http.get("/api/ballots/" + $scope.finalCode)
      .then(function(data){

        $scope.ballotData = data;
        $scope.votingResultsArray = $scope.ballotData.data.data.user_vote;
        $scope.results[0].ballotOption = $scope.ballotData.data.data.ballot_option_one;
        $scope.results[1].ballotOption = $scope.ballotData.data.data.ballot_option_two;
        $scope.results[2].ballotOption = $scope.ballotData.data.data.ballot_option_three;
        $scope.results[3].ballotOption = $scope.ballotData.data.data.ballot_option_four;
        $scope.results[4].ballotOption = $scope.ballotData.data.data.ballot_option_five;

        angular.forEach($scope.results, function(value,index) {
          angular.forEach($scope.votingResultsArray, function(individualValue,position) {
            if(individualValue.ballot_option_name === value.ballotOption){
              value.filterId++;
            }
          })
        });

        $scope.maxVoteResultCount = Math.max.apply(Math,$scope.results.map(function(o){return o.filterId;}));

        angular.forEach($scope.results, function(value, index) {
          if(value.filterId === $scope.maxVoteResultCount) {
            $scope.theFinalWinner = value.ballotOption;
          }
        });
      });

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
    }, 4000);
  }, 3000);
});