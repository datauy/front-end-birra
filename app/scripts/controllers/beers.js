'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:BeersCtrl
 * @description
 * # BeersCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('BeersCtrl', function ($scope,Beer) {
    $scope.beers = [{
      'id' : 1,
      'name' : 'Cerveza',
      'description' : 'Es una cerveza muy buena',
      'image' : 'http://www.beergeeks.cl/wordpress/wp-content/uploads/2013/05/logo.jpg'
    },{
      'id': 2,
      'name' : 'Cerveza 2',
      'description' : 'Es una cerveza muy mala',
      'image' : 'http://www.cervezadeargentina.com.ar/cervezas/images/VALHALLA_logo_jpg.gif'
    }];
  });
