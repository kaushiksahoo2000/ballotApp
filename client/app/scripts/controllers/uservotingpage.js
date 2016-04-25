'use strict';

angular.module('BallotizeApp')
.controller('UserVotingPageCtrl',function($scope, $http, $rootScope, $timeout) {
  $timeout(function() {
    $http.get("/api/ballots/" + $scope.userGivenCode)
    .success(function(data) {
      $scope.ballotData = data;
      $scope.userTopic = $scope.ballotData.data.ballot_name;
      $scope.choices[0].choice = $scope.ballotData.data.ballot_option_one;
      $scope.choices[1].choice = $scope.ballotData.data.ballot_option_two;
      $scope.choices[2].choice = $scope.ballotData.data.ballot_option_three;
      $scope.choices[3].choice = $scope.ballotData.data.ballot_option_four;
      $scope.choices[4].choice = $scope.ballotData.data.ballot_option_five;
    });
  }, 1000);

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
  $scope.userVoterChoice = '';

  $scope.select = function(i) {
    $scope.selectedIndex = i;
    $scope.userVoterChoice = this.choice.choice;
  };

  $scope.endVoting = function() {
    $http({
      method  : 'POST',
      url     : '/api/voter/vote',
      data    : {
        "voteId": $rootScope.voteId,
        "userVoterChoice": $scope.userVoterChoice,
        "ballotId": $scope.ballotData.data.id
      }
    }).then(function(success) {
      console.log(success);
    }, function(err) {
      console.log('THIS IS AN ERROR!');
    });
  };
});

