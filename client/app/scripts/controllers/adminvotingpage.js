'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:AdminVotingPageCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('AdminVotingPageCtrl',function($scope, $http, $rootScope, $timeout, $interval){
    $timeout(function(){
      $http.get("/api/ballots/" + $scope.randomCode)
      .success(function(data){
        $scope.ballotData = data;
        $scope.adminVoteId = $scope.ballotData.data.user_vote[0].id;
        $rootScope.adminGivenGivenCode = $scope.randomCode;
        console.log("this is userGivenGivenCode", $rootScope.adminGivenGivenCode);
        // console.log("this is $scope.ballotData", $scope.ballotData);
        // console.log("this is $rootScope.voteId; this is voterId", $rootScope.voteId);
        // console.log("this is $scope.ballotData.id; this is id", $scope.ballotData.data.id);
        // console.log("THIS IS THE ADMINS vote ID", $scope.ballotData.data.user_vote[0].id);
        $scope.votingTopic = $scope.ballotData.data.ballot_name;
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
        voterId: 6
      },
      {
        voterId: 7
      },
      {
        voterId: 8
      },
      {
        voterId: 9
      },
      {
        voterId: 10
      },
      {
        voterId: 11
      },
      {
        voterId: 12
      },
      {
        voterId: 13
      },
      {
        voterId: 14
      },
      {
        voterId: 15
      },
      {
        voterId: 16
      },
      {
        voterId: 17
      },
      {
        voterId: 18
      },
      {
        voterId: 19
      },
      {
        voterId: 20
      },
      {
        voterId: 21
      },
      {
        voterId: 22
      },
      {
        voterId: 23
      },
      {
        voterId: 24
      },
      {
        voterId: 25
      },
      {
        voterId: 26
      },
      {
        voterId: 27
      },
      {
        voterId: 28
      },
      {
        voterId: 29
      },
      {
        voterId: 30
      }

    ];
    $interval(function(){
      console.log('Inside populate voters function');
      $http.get("/api/ballots/" + $scope.randomCode)
      .then(function(result){
        $scope.voterData = result.data;
        console.log('uservote data user_name', $scope.voterData.data.user_vote[0].user_name);
        $scope.ballotVoters = $scope.voterData.data.user_vote;
        console.log("this is the voters array", $scope.ballotVoters);
        angular.forEach($scope.ballotVoters,function(value,index){
          console.log("this is the user_name value in forEach", value.user_name);
          $scope.vs[index].voter = value.user_name;
        });
        // $scope.vs[0].voter = $scope.voterData.data.ballot_option_one;
        // $scope.vs[1].voter = $scope.voterData.data.ballot_option_two;
        // $scope.vs[2].voter = $scope.voterData.data.ballot_option_three;
        // $scope.vs[3].voter = $scope.voterData.data.ballot_option_four;
        // $scope.vs[4].voter = $scope.voterData.data.ballot_option_five;
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
    $scope.adminVoterChoice = '';

    $scope.select = function(i){
      $scope.selectedIndex = i;
      console.log(this.choice.choice);
      $scope.adminVoterChoice = this.choice.choice;
      console.log("this is the updating adminVoterChoice", $scope.adminVoterChoice);
    };

    $scope.endVoting = function(){
      console.log("inside endVoting function in adminvotingpage");
      $http({
          method  : 'POST',
          url     : '/api/endvote',
          data    : {
            "voteId": $scope.adminVoteId,
            "userVoterChoice": $scope.adminVoterChoice,
            "ballotId": $scope.ballotData.data.id
          }
        }).then(function(success){
          console.log(success);
          //take next step from admin page
        }, function(err){
          console.log('THIS IS AN ERROR!');
        });
    };
  });
