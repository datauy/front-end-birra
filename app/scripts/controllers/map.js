'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('MapCtrl', function ($scope, Brewerie, Venue, leafletEvents) {

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
      markers: {},
      events: {
        markers: {
          enable: leafletEvents.getAvailableMarkerEvents(),
        }
      },
      defaults: {
        scrollWheelZoom: false
      },

      breweryIcon: {
        iconUrl: 'images/pin-brewery.svg',
        iconSize: [38, 49],
        iconAnchor:   [19, 42],
      },

      venueIcon: {
        iconUrl: 'images/pin-venue.svg',
        iconSize: [38, 49],
        iconAnchor:   [19, 42],
      },
    });

    //Getting breweries
    Brewerie.query(function(breweries) {
      angular.forEach(breweries, function(brewery) {
        if (brewery.lat !== null && brewery.lng !== null) {
          $scope.markers['brewery_' + brewery.id] = {
            lat: parseFloat(brewery.lat),
            lng: parseFloat(brewery.lng),
            model: brewery,
            message: brewery.name,
            icon: $scope.breweryIcon,
          };
        }
      });
    });

    Venue.query(function(venues) {
      angular.forEach(venues, function(venue) {
        if (venue.lat !== null && venue.lng !== null) {
          $scope.markers['venue_' + venue.id] = {
            lat: parseFloat(venue.lat),
            lng: parseFloat(venue.lng),
            model: venue,
            message: venue.name,
            icon: $scope.venueIcon,
          };
        }
      });
    });
  });
