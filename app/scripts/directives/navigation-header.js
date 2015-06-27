'use strict';

/**
 * @ngdoc directive
 * @name birraApp.directive:navigationHeader
 * @description
 * # navigationHeader
 */
angular.module('birraApp')
  .directive('navigationHeader', function () {
    return {
      templateUrl: 'views/navigation-header.html',
      restrict: 'E',
      controller: 'controllers/navigation-header.js'
    };
  });
