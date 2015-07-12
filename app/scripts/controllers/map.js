'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('MapCtrl', function ($scope, Brewerie, leafletEvents, leafletData) {

    //Render map
    angular.extend($scope, {
      layers: {
        baselayers: {
          osm: {
            name: 'OpenStreetMap',
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            type: 'xyz'
          }
        }
      },
      montevideo: {
        lat: -34.90,
        lng: -56.18,
        zoom: 12
      },
      markers: [],
      events: {
        markers: {
          enable: leafletEvents.getAvailableMarkerEvents(),
        }
      },
      defaults: {
        scrollWheelZoom: false
      }
    });

    //Getting breweries
    Brewerie.query(function(breweries) {
      var markers = {};

      angular.forEach(breweries, function(brewery, key) {
        if (brewery.lat !== null && brewery.lng !== null) {
          markers["brewery_" + brewery.id] = {
            lat: parseFloat(brewery.lat),
            lng: parseFloat(brewery.lng),
            model: brewery,
            message: brewery.name,
          };
        };
      });

      $scope.markers = markers;
    });
  });
