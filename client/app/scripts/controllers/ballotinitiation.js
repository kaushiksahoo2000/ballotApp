'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:BallotInitiationCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('BallotInitiationCtrl', ['$scope', '$rootScope', 'UserFactory', '$http', function($scope, $rootScope, UserFactory, $http){
    $rootScope.randomCode = (new Date()).getTime().toString().slice(8);
    $rootScope.userNameCode = (new Date()).getTime().toString().slice(8);

    $scope.enterBallotCode = function(){
      console.log("userGivenUserName on line 16 in ballot initiation.js", $scope.userGivenUserName);
      if(!$scope.userGivenUserName){
        $scope.userNameFinal = "Voter" + $rootScope.userNameCode;
      }else{
        $scope.userNameFinal = $scope.userGivenUserName;
      }
      $rootScope.userGivenCode = $scope.userGivenCode;
      // console.log("this is $rootScope.userGivenCode", $rootScope.userGivenCode);
      // console.log("this is the userGivenUserName", $scope.userGivenUserName);
      $http({
          method  : 'POST',
          url     : '/api/ballots/'+$scope.userGivenCode+'/'+$scope.userNameFinal,
          data    : {
            "name": $scope.userNameFinal,
            "ballotCode": $scope.userGivenCode
          }
        }).then(function(success){
          console.log("THIS IS THE SUCCESS OBJECT TO BE ACCESSED!", success);
          console.log('this is the success ID on entering a roomcode', success.data.data.id);
          $rootScope.voteId = success.data.data.id;
          console.log('this is $rootScope.voteId!!!', $rootScope.voteId);
        }, function(err){
          console.log('THIS IS AN ERROR!');
        });
    };

    $scope.saveUser = function(user){
      // console.log('inside of saveUser, the user is:', user);
      UserFactory.setUser(user);
    }
  }])
  .factory('UserFactory', function(){
    var user = '';
    var setUser = function(username){
      user = username;
    }
    var getUser = function(){
      return user;
    }

    return {
      getUser: getUser,
      setUser : setUser
    }
  });
