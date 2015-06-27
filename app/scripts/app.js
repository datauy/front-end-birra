'use strict';

/**
 * @ngdoc overview
 * @name birraApp
 * @description
 * # birraApp
 *
 * Main module of the application.
 */
angular
  .module('birraApp', [
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
        templateUrl: 'views/beers.html',
        controller: 'BeersCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/notifications', {
        templateUrl: 'views/notifications.html',
        controller: 'NotificationsCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .when('/filter', {
        templateUrl: 'views/filter.html',
        controller: 'FilterCtrl'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
