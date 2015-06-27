'use strict';

describe('Service: Brewerie', function () {

  // load the service's module
  beforeEach(module('birraApp'));

  // instantiate service
  var Brewerie;
  beforeEach(inject(function (_Brewerie_) {
    Brewerie = _Brewerie_;
  }));

  it('should do something', function () {
    expect(!!Brewerie).toBe(true);
  });

});
