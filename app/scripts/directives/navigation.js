'use strict';

/**
 * @ngdoc directive
 * @name birraApp.directive:navigation
 * @description
 * # navigation
 */
angular.module('birraApp')
  .directive('navigation', function () {
    return {
      templateUrl: 'views/navigation.html',
      restrict: 'E',
      controller: 'NavigationCtrl'
    };
  });
