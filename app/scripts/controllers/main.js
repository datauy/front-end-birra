'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
