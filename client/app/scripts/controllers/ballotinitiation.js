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
    $scope.enterBallotCode = function(){
      $rootScope.userGivenCode = $scope.userGivenCode;
      // console.log("this is $rootScope.userGivenCode", $rootScope.userGivenCode);
      // console.log("this is the userGivenUserName", $scope.userGivenUserName);
      $http({
          method  : 'POST',
          url     : '/api/ballots/'+$scope.userGivenCode+'/'+$scope.userGivenUserName,
          data    : {
            "name": $scope.userGivenUserName,
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
