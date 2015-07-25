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
      brewery: {
        default: {
          normal: 'images/pin-brewery.svg',
          selected: 'images/pin-selected.svg',
        }
      },
      venue: {
        Brewpub: {
          normal: 'images/pin-bar.svg',
          selected: 'images/pin-selected.svg'
        },
        Tienda: {
          normal: 'images/pin-store.svg',
          selected: 'images/pin-selected.svg'
        },
        Bar: {
          normal: 'images/pin-bar.svg',
          selected: 'images/pin-selected.svg'
        },
        Restaurant: {
          normal: 'images/pin-bar.svg',
          selected: 'images/pin-selected.svg'
        },
        default: {
          normal: 'images/pin-bar.svg',
          selected: 'images/pin-selected.svg'
        },
      },
    };

    function addMarker(model, type, subType) {
      if (model.lat !== null && model.lng !== null) {
        $scope.markers[type + '_' + model.id] = {
          lat: parseFloat(model.lat),
          lng: parseFloat(model.lng),
          model: model,
          icon: iconFor(type, subType, 'normal'),
          type: type,
          subType: subType,
        };
      }
    }

    function iconFor(type, subType, state) {
      return {
        iconUrl: (icons[type][subType] || icons[type].default)[state],
        iconSize: [38, 49],
        iconAnchor:   [19, 42],
      };
    }

    function select(marker) {
      unselect();

      $scope.selectedMarker = marker;
      $scope.markers[marker.type + '_' + marker.model.id].icon = iconFor(marker.type, marker.subType, 'selected');
    }

    function unselect() {
      if ($scope.selectedMarker) {
        var marker = $scope.selectedMarker;

        $scope.markers[marker.type + '_' + marker.model.id].icon = iconFor(marker.type, marker.subType, 'normal');
        $scope.selectedMarker = null;
      }
    }

    //Getting breweries
    Brewerie.query(function(breweries) {
      angular.forEach(breweries, function(brewery) {
        addMarker(brewery, 'brewery', brewery.brewery_type);
      });
    });

    Venue.query(function(venues) {
      angular.forEach(venues, function(venue) {
        addMarker(venue, 'venue', venue.venue_type);
      });
    });

    $scope.$on('leafletDirectiveMarker.click', function(event, args){
      select(args.model);
    });

    $scope.$on('leafletDirectiveMap.click', function(){
      unselect();
    });
  });
