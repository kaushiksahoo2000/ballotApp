'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:UserVotingPageCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('UserVotingPageCtrl',function($scope, $http, $rootScope, $timeout){
    $timeout(function(){
    $http.get("/api/ballots/" + $scope.userGivenCode)
    .success(function(data){
      $scope.ballotData = data;
      $scope.userTopic = $scope.ballotData.data.ballot_name;
      console.log("this is $scope.ballotData", $scope.ballotData);
      console.log("this is $rootScope.ballotId in uservotingpage", $rootScope.ballotId);
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

    $scope.select = function(i){
      $scope.selectedIndex = i;
      console.log(this.choice.choice);
      $scope.userVoterChoice = this.choice.choice;
      console.log("this is the updating userVoterChoice", $scope.userVoterChoice);
    };

    $scope.endVoting = function(){
      console.log("inside endVoting function");
      $http({
          method  : 'POST',
          url     : '/api/voter/vote',
          data    : {
            "ballotId": $rootScope.ballotId,
            "userVoteChoice": $scope.userVoterChoice
          }
        }).then(function(success){
          console.log(success);
        }, function(err){
          console.log('THIS IS AN ERROR!');
        });
    };
  });














  // $scope.userVotingInfo = [];
  // $scope.saveData = function(){
  //   console.log($scope.userVotingInfo);
  // };
