'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:BeersCtrl
 * @description
 * # BeersCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('BeersCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
