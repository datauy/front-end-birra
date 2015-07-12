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
      selectedMarker: null,
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
    });

    var icons = {
      'brewery': 'images/pin-brewery.svg',
      'Brewpub': 'images/pin-bar.svg',
      'Tienda': 'images/pin-store.svg',
      'Bar': 'images/pin-bar.svg',
      'Restaurant': 'images/pin-bar.svg',
      'default': 'images/pin-bar.svg',
    };

    function addMarker(model, type, iconUrl) {
      if (model.lat !== null && model.lng !== null) {
        $scope.markers[type + '_' + model.id] = {
          lat: parseFloat(model.lat),
          lng: parseFloat(model.lng),
          model: model,
          icon: {
            iconUrl: iconUrl,
            iconSize: [38, 49],
            iconAnchor:   [19, 42],
          },
          type: type,
        };
      }
    }

    //Getting breweries
    Brewerie.query(function(breweries) {
      angular.forEach(breweries, function(brewery) {
        addMarker(brewery, 'brewery', icons.brewery);
      });
    });

    Venue.query(function(venues) {
      angular.forEach(venues, function(venue) {
        addMarker(venue, 'venue', icons[venue.venue_type] || icons.default);
      });
    });

    $scope.$on('leafletDirectiveMarker.click', function(event, args){
      $scope.selectedMarker = args.model;
    });

    $scope.$on('leafletDirectiveMap.click', function(){
      $scope.selectedMarker = null;
    });
  });
