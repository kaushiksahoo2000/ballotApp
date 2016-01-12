'use strict';

/**
 * @ngdoc overview
 * @name angularBestPracticeApp
 * @description
 * # angularBestPracticeApp
 *
 * Main module of the application.
 */
angular
  .module('angularBestPracticeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/main.html',
    //     controller: 'MainCtrl',
    //     controllerAs: 'main'
    //   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'AboutCtrl',
    //     controllerAs: 'about'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
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
      .when('/uservotingpage', {
        templateUrl: 'views/uservotingpage.html',
        controller: 'UserVotingPageCtrl'
      })
      .when('/votingresultspage', {
        templateUrl: 'views/votingresultspage.html',
        controller: 'VotingResultsPageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
