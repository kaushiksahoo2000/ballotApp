'use strict';
angular.module('BallotizeApp', [
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
  .when('/adminvotingpage', {
    templateUrl: 'views/adminvotingpage.html',
    controller: 'AdminVotingPageCtrl'
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
