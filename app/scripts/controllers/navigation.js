'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('NavigationCtrl', function ($scope,$location) {
      $scope.goToView = function(view) {
          $location.path(view);
      };
  });
