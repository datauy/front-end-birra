'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('MapCtrl', function ($scope,Brewerie,leafletEvents,leafletData) {

    //Render map
    angular.extend($scope, {
      layers: {
            baselayers: {
                googleTerrain: {
                    name: 'Google Terrain',
                    layerType: 'TERRAIN',
                    type: 'google'
                },
                googleHybrid: {
                    name: 'Google Hybrid',
                    layerType: 'HYBRID',
                    type: 'google'
                },
                googleRoadmap: {
                    name: 'Google Streets',
                    layerType: 'ROADMAP',
                    type: 'google'
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
    Brewerie.query(function(breweries){
      var westLng = 34.770956;
      var eastLng = 34.832754;
      var northLat = 32.098787;
      var southLat = 32.05261;
      var numberOfMarkers = 100;
      var markers =[];
      angular.forEach(breweries,function(value,key){
          var randomLng = (Math.random() * (eastLng - westLng) + westLng).toFixed(6);
          var randomLat = (Math.random() * (northLat - southLat) + southLat).toFixed(6);
          markers['maerker_'+value.name] = {
              lat: parseFloat(randomLat),
              lng: parseFloat(randomLng),
          };
          console.log(markers);
      });
      $scope.markers = markers;
      console.log($scope.markers):
    });
    //Marker click event listener
    $scope.$on('leafletDirectiveMarker.click', function(event, args){
      console.log('hola');
    });



  });
