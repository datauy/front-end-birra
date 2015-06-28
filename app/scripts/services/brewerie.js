'use strict';

/**
 * @ngdoc service
 * @name birraApp.Brewerie
 * @description
 * # Brewerie
 * Factory in the birraApp.
 */
angular.module('birraApp')
  .factory('Brewerie', function ($resource) {
    return {
        get : function() {
            return $resource('/api/v1/breweries/:id');
        }
    }
  });
