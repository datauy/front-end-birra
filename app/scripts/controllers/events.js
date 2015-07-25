'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('EventsCtrl', function ($scope) {
    $scope.events = [
      {
        title: "Título 1",
        description: "Descripción 1",
        image: "http://www.placehold.it/100x100"
      },
      {
        title: "Título 2",
        description: "Descripción 2",
        image: "http://www.placehold.it/100x100"
      },
      {
        title: "Título 3",
        description: "Descripción 3",
        image: "http://www.placehold.it/100x100"
      },
      {
        title: "Título 4",
        description: "Descripción 4",
        image: "http://www.placehold.it/100x100"
      }
    ];
  });
