'use strict';

/**
 * @ngdoc overview
 * @name ballotTempApp
 * @description
 * # ballotTempApp
 *
 * Main module of the application.
 */
angular
  .module('ballotTempApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/ballotinitiation.html',
        controller: 'BallotInitiationCtrl',
        controllerAs: 'ballotinitiation'
      })
      .when('/ballotcreation', {
        templateUrl: 'views/ballotcreation.html',
        controller: 'BallotCreationCtrl',
        controllerAs: 'ballotcreation'
      })
      .when('/voterssetup', {
        templateUrl: 'views/voterssetup.html',
        controller: 'VotersSetupCtrl',
        controllerAs: 'voterssetup'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
