'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
