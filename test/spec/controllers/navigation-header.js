'use strict';

describe('Controller: NavigationHeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('birraApp'));

  var NavigationHeaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavigationHeaderCtrl = $controller('NavigationHeaderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
