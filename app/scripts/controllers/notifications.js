'use strict';

/**
 * @ngdoc function
 * @name birraApp.controller:NotificationsCtrl
 * @description
 * # NotificationsCtrl
 * Controller of the birraApp
 */
angular.module('birraApp')
  .controller('NotificationsCtrl', function($scope, Facebook, facebookProvider) {
    var news = [];
    Facebook.api('/me/posts/?access_token=' + facebookProvider.accessToken + '&fields=message&include_hidden=false', function(data) {
        angular.forEach(data,function(value,key){
          if(value.message) {
            console.log(value);
          }
        })
    });
  });
