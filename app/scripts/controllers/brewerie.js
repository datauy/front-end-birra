'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:BrewerieCtrl
 * @description
 * # BrewerieCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('BrewerieCtrl', function ($scope,Brewerie) {
      Brewerie.query(function(breweries){
          $scope.breweries = breweries;
      })
  });
