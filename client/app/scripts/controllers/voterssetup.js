'use strict';

/**
 * @ngdoc function
 * @name ballotTempApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ballotTempApp
 */
angular.module('angularBestPracticeApp')
  .controller('VotersSetupCtrl', function ($scope) {
    $scope.votersSetupInfo = [];
    $scope.saveData = function(){
      console.log($scope.votersSetupInfo);
    };
  });
