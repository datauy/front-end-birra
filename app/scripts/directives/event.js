'use strict';

/**
 * @ngdoc directive
 * @name birraApp.directive:event
 * @description
 * # event
 */
angular.module('birraApp')
  .directive('event', function () {
    return {
      templateUrl: 'views/event.html',
      restrict: 'E',
      scope : {
        event: '=event',
      }
    };
  });
