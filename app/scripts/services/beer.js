'use strict';

/**
 * @ngdoc service
 * @name birraApp.Beer
 * @description
 * # Beer
 * Factory in the birraApp.
 */
angular.module('birraApp')
  .factory('Beer', function ($resource) {
    return $resource('/api/v1/beers/:id');
  });
