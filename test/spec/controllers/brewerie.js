'use strict';

describe('Controller: BrewerieCtrl', function () {

  // load the controller's module
  beforeEach(module('birraApp'));

  var BrewerieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BrewerieCtrl = $controller('BrewerieCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
