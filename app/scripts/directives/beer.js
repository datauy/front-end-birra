'use strict';

/**
 * @ngdoc directive
 * @name birraApp.directive:beer
 * @description
 * # beer
 */
angular.module('birraApp')
  .directive('beer', function () {
    return {
      templateUrl: 'views/beer.html',
      restrict: 'E',
      scope : {
        beer : "=beer"
      },
      controller: 'BeerCtrl'
    };
  });
