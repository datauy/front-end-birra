'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('EventsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
