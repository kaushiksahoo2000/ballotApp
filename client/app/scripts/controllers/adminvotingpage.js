'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:AdminVotingPageCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('AdminVotingPageCtrl',function($scope, $http, $rootScope, $timeout){
    console.log("This is the randomly generated code", $scope.randomCode);
    $timeout(function(){
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
    }, 1000);

    $scope.vs = [
      {
        voterId: 1
      },
      {
        voterId: 2
      },
      {
        voterId: 3
      },
      {
        voterId: 4
      },
      {
        voterId: 5
      }
    ];
    $scope.populateVoters = function(){
      console.log('Inside populate voters function');
      $http.get("/api/ballots/" + $scope.randomCode)
      .then(function(result){
        $scope.voterData = result.data;
        console.log('bData1', $scope.voterData)
        console.log('option1', $scope.voterData.data.ballot_option_one);
        $scope.vs[0].voter = $scope.voterData.data.ballot_option_one;
        console.log($scope.vs[0].voter);
        $scope.vs[1].voter = $scope.voterData.data.ballot_option_two;
        $scope.vs[2].voter = $scope.voterData.data.ballot_option_three;
        $scope.vs[3].voter = $scope.voterData.data.ballot_option_four;
        $scope.vs[4].voter = $scope.voterData.data.ballot_option_five;
      })
    };


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
