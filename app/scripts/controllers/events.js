'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('EventsCtrl', function($scope, Facebook, facebookProvider) {
    var events = [];
    Facebook.api('/me/events/?access_token=' + facebookProvider.accessToken + '&fields=place,start_time,end_time,attending_count,picture{url},name,description', function(fobjects) {
      angular.forEach(fobjects.data, function(obj) {
        events.push({
          title: obj.name,
          description: obj.description,
          image: obj.picture.data.url,
          place: obj.place,
          start_time: obj.start_time,
          end_time: obj.end_time

        });
        $scope.events = events;
      })


    });

  });
