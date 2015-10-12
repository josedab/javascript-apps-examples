'use strict';

/**
 * @ngdoc overview
 * @name socialprofileApp
 * @description
 * # socialprofileApp
 *
 * Main module of the application.
 */
angular
  .module('socialprofileApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/socialprofile', {
        templateUrl: 'views/socialprofile.html',
        controller: 'SocialprofileCtrl',
        controllerAs: 'socialprofile'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
