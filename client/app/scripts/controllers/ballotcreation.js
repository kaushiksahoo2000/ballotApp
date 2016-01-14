
/**
 * @ngdoc function
 * @name ballotTempApp.controller:BallotCreationCtrl
 * @description
 * # BallotCreationCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('BallotCreationCtrl', ['$scope', '$http', '$rootScope', 'UserFactory', function ($scope, $http, $rootScope, UserFactory) {
    $scope.initiator = UserFactory.getUser();
    console.log("THIS IS ROOT SCOPE NEW INITIATOR within ballotcreation.js", UserFactory.getUser());
    $scope.choices = {
      choices: [{choice:'choice1'},{choice:'choice2'},{choice:'choice3'}],
      topic: '',
      code: $rootScope.randomCode,
      initiator: $scope.initiator
    };
    $scope.addNewChoice = function(){
      var newItemNo = $scope.choices.length+1;
      $scope.choices.push({'choice':'choice'+newItemNo});
    };
    $scope.generateBallot = function(){
      console.log("THIS IS $SCOPE.CHOICES",$scope.choices);
      $http({
          method  : 'POST',
          url     : '/api/ballots',
          data    : {
            "ballotName": $scope.choices.topic,
            "userId": "4",
            "ballotCode": $scope.choices.code,
            "ballotOptionOne": $scope.choices.choices[0] ? $scope.choices.choices[0].name : 'NULL',
            "ballotOptionTwo": $scope.choices.choices[1] ? $scope.choices.choices[1].name : 'NULL',
            "ballotOptionThree": $scope.choices.choices[2] ? $scope.choices.choices[2].name : 'NULL',
            "ballotOptionFour": $scope.choices.choices[3] ? $scope.choices.choices[3].name : 'NULL',
            "ballotOptionFive": $scope.choices.choices[4] ? $scope.choices.choices[4].name : 'NULL'
          }
        }).then(function(success){
          console.log(success);
        }, function(err){
          console.log('THIS IS AN ERROR!');
        });
    };
  }]);
