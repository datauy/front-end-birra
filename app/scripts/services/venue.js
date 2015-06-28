'use strict';

/**
 * @ngdoc service
 * @name birraApp.Venue
 * @description
 * # Venue
 * Factory in the birraApp.
 */
angular.module('birraApp')
  .factory('Venue', function ($resource) {
      return {
        get : function() {
          return $resource('/api/v1/venues/:id');
        }
      }
  });
