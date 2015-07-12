'use strict';

/**
 * @ngdoc directive
 * @name birraApp.directive:venueMapInfo
 * @description
 * # beer
 */
angular.module('birraApp')
  .directive('venueMapInfo', function () {
    return {
      templateUrl: 'views/venue-map-info.html',
      scope : {
        venue: '=',
      },
      link: function($scope) {
        $scope.imageSrc = function() {
          return $scope.venue.photo_prefix + 'height70' + $scope.venue.photo_suffix;
        };
        $scope.showImage = function() { return $scope.venue.photo_prefix; };
        $scope.name = function() { return $scope.venue.name; };
        $scope.address = function() { return $scope.venue.address; };
      },
      restrict: 'E',
    };
  });
