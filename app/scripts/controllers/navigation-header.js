'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:NavigationHeaderCtrl
 * @description
 * # NavigationHeaderCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('NavigationHeaderCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
