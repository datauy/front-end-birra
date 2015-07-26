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
    'ngTouch',
    'facebook',
    'leaflet-directive'
  ])
  .config(function ($routeProvider,FacebookProvider) {
    var appId = '1632863393659213';
    FacebookProvider.init(appId);
    $routeProvider
      .when('/breweries', {
        templateUrl: 'views/brewerie.html',
        controller: 'BrewerieCtrl'
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
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .otherwise({
        redirectTo: '/map'
      });
  });
