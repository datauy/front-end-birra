'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('MapCtrl', function ($scope) {
    angular.extend($scope, {
      montevideo: {
        lat: -34.8580556,
        lng: -56.1708333,
        zoom: 13
      },
      defaults: {
        scrollWheelZoom: false
      }
    });
  });
