'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ballotTempApp
 */
angular.module('ballotTempApp')
  .controller('VotersSetupCtrl', function ($scope) {
    $scope.votersSetupInfo = [];
    $scope.saveData = function(){
      console.log($scope.votersSetupInfo);
    };
  });
