"use strict";angular.module("birraApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","facebook","leaflet-directive"]).config(["$routeProvider","FacebookProvider",function(a,b){var c="1632863393659213";b.init(c),a.when("/breweries",{templateUrl:"views/brewerie.html",controller:"BrewerieCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/notifications",{templateUrl:"views/notifications.html",controller:"NotificationsCtrl"}).when("/events",{templateUrl:"views/events.html",controller:"EventsCtrl"}).when("/map",{templateUrl:"views/map.html",controller:"MapCtrl"}).otherwise({redirectTo:"/map"})}]),angular.module("birraApp").controller("AboutCtrl",["$scope",function(a){}]),angular.module("birraApp").controller("EventsCtrl",["$scope","Facebook","facebookProvider",function(a,b,c){var d=[];b.api("/me/events/?access_token="+c.accessToken+"&fields=place,start_time,end_time,attending_count,picture{url},name,description",function(b){angular.forEach(b.data,function(b){d.push({title:b.name,description:b.description,image:b.picture.data.url,place:b.place,start_time:b.start_time,end_time:b.end_time}),a.events=d})})}]),angular.module("birraApp").controller("NavigationCtrl",["$scope","$location",function(a,b){a.goToView=function(a){b.path(a)},a.isActive=function(a){return a==b.path()}}]),angular.module("birraApp").controller("NotificationsCtrl",["$scope","Facebook","facebookProvider",function(a,b,c){b.api("/me/posts/?access_token="+c.accessToken+"&fields=message&include_hidden=false",function(a){angular.forEach(a,function(a,b){a.message&&console.log(a)})})}]),angular.module("birraApp").factory("Brewerie",["$resource",function(a){return a("http://birra.herokuapp.com/api/v1/breweries/:id")}]),angular.module("birraApp").factory("Beer",["$resource",function(a){return a("http://birra.herokuapp.com/api/v1/beers/:id")}]),angular.module("birraApp").factory("Venue",["$resource",function(a){return a("http://birra.herokuapp.com/api/v1/venues/:id")}]),angular.module("birraApp").controller("MapCtrl",["$scope","Brewerie","Venue","leafletEvents",function(a,b,c,d){function e(b,c,d){null!==b.lat&&null!==b.lng&&(a.markers[c+"_"+b.id]={lat:parseFloat(b.lat),lng:parseFloat(b.lng),model:b,icon:f(c,d,"normal"),type:c,subType:d})}function f(a,b,c){return{iconUrl:(i[a][b]||i[a]["default"])[c],iconSize:[38,49],iconAnchor:[19,42]}}function g(b){h(),a.selectedMarker=b,a.markers[b.type+"_"+b.model.id].icon=f(b.type,b.subType,"selected")}function h(){if(a.selectedMarker){var b=a.selectedMarker;a.markers[b.type+"_"+b.model.id].icon=f(b.type,b.subType,"normal"),a.selectedMarker=null}}angular.extend(a,{selectedMarker:null,montevideo:{lat:-34.9,lng:-56.18,zoom:15},markers:{},events:{markers:{enable:d.getAvailableMarkerEvents()}},defaults:{scrollWheelZoom:!1}});var i={brewery:{"default":{normal:"images/pin-brewery.16641f6b.png",selected:"images/pin-brewery-active.0d68cd64.png"}},venue:{Brewpub:{normal:"images/pin-bar.27c73fbd.png",selected:"images/pin-bar-active.ad7896ee.png"},Tienda:{normal:"images/pin-store.png",selected:"images/pin-store-active.png"},Bar:{normal:"images/pin-bar.27c73fbd.png",selected:"images/pin-bar-active.ad7896ee.png"},Restaurant:{normal:"images/pin-bar.27c73fbd.png",selected:"images/pin-bar-active.ad7896ee.png"},"default":{normal:"images/pin-bar.27c73fbd.png",selected:"images/pin-bar-selected.png"}}};b.query(function(a){angular.forEach(a,function(a){e(a,"brewery",a.brewery_type)})}),c.query(function(a){angular.forEach(a,function(a){e(a,"venue",a.venue_type)})}),a.$on("leafletDirectiveMarker.click",function(a,b){g(b.model)}),a.$on("leafletDirectiveMap.click",function(){h()})}]),angular.module("birraApp").directive("navigation",function(){return{templateUrl:"views/navigation.html",restrict:"E",controller:"NavigationCtrl"}}),angular.module("birraApp").directive("navigationHeader",function(){return{templateUrl:"views/navigation-header.html",restrict:"E",controller:"NavigationHeaderCtrl"}}),angular.module("birraApp").controller("NavigationHeaderCtrl",["$scope",function(a){}]),angular.module("birraApp").directive("beer",function(){return{templateUrl:"views/beer.html",restrict:"E",scope:{beer:"=beer"},controller:"BeerCtrl"}}),angular.module("birraApp").directive("event",function(){return{templateUrl:"views/event.html",restrict:"E",scope:{event:"=event"}}}),angular.module("birraApp").directive("venueMapInfo",function(){return{templateUrl:"views/venue-map-info.html",scope:{venue:"="},link:function(a){a.imageSrc=function(){return a.venue.photo_prefix+"height70"+a.venue.photo_suffix},a.showImage=function(){return a.venue.photo_prefix},a.name=function(){return a.venue.name},a.address=function(){return a.venue.address}},restrict:"E"}}),angular.module("birraApp").controller("BeerCtrl",["$scope",function(a){}]),angular.module("birraApp").controller("BrewerieCtrl",["$scope","Brewerie",function(a,b){b.query(function(b){a.breweries=b})}]),angular.module("birraApp").provider("facebookProvider",function(){function a(){this.accessToken=b,this.fbPage=c}var b="CAAXNFKKLuU0BAHDXZBsA89wpHHbiRnKBlQfcw2AScaKpZC5ZAHxikQs0XgIapVhCyt3ZCWI2FVZCtfHmAudHSvGZBJ5DTeP7ZBbZC5DD2YjOi1rXUJeyK7OolNIriNjVhfT28BQeA9BbhvnDIfZCRNmVhbKbwvV2769OPAJZBsA3ZBtnvoPAJQoBo2d6TlkMhP5a6wqgu5rKVZADgf0NVmFNdxAZA",c="Cer";this.$get=function(){return new a}});