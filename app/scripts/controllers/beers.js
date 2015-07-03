'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:BeersCtrl
 * @description
 * # BeersCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('BeersCtrl', function ($scope,$location, $anchorScroll,Beer) {
    Beer.query(function(beers){
        $scope.beers = beers;
    });
  });
