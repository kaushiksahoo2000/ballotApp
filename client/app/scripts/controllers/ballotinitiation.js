'use strict';

angular.module('BallotizeApp')
.controller('BallotInitiationCtrl', ['$scope', '$rootScope', 'UserFactory', '$http', function($scope, $rootScope, UserFactory, $http) {
  $rootScope.randomCode =   (new Date()).getTime().toString().slice(8);
  $rootScope.userNameCode = (new Date()).getTime().toString().slice(8);

  $scope.enterBallotCode = function() {

    if(!$scope.userGivenUserName) {
      $scope.userNameFinal = "Voter" + $rootScope.userNameCode;
    } else {
      $scope.userNameFinal = $scope.userGivenUserName;
    }
    $rootScope.userGivenCode = $scope.userGivenCode;

    $http({
      method  : 'POST',
      url     : '/api/ballots/'+$scope.userGivenCode+'/'+$scope.userNameFinal,
      data    : {
        "name": $scope.userNameFinal,
        "ballotCode": $scope.userGivenCode
      }
    }).then(function(success) {
      $rootScope.voteId = success.data.data.id;
      }, function(err) {
        console.log(err);
    });
  };

  $scope.saveUser = function(user){
    UserFactory.setUser(user);
  }
}])

.factory('UserFactory', function() {
  var user = '';
  var setUser = function(username) {
    user = username;
  }
  var getUser = function() {
    return user;
  }

  return {
    getUser: getUser,
    setUser : setUser
  }
});
