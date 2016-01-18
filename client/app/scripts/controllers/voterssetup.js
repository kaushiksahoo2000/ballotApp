'use strict';

angular.module('BallotizeApp')
.controller('VotersSetupCtrl', function ($scope) {
  $scope.votersSetupInfo = [];
  $scope.saveData = function() {
    console.log($scope.votersSetupInfo);
  };
});
