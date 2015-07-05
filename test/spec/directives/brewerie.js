'use strict';

describe('Directive: brewerie', function () {

  // load the directive's module
  beforeEach(module('birraApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<brewerie></brewerie>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the brewerie directive');
  }));
});
