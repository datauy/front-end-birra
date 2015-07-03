'use strict';

/**
 * @ngdoc filter
 * @name birraApp.filter:beerFilter
 * @function
 * @description
 * # beerFilter
 * Filter in the birraApp.
 */
angular.module('birraApp')
  .filter('beerFilter', function () {
    return function (input, range, start) {
      return input.slice(start, start+range);
    };
  });
