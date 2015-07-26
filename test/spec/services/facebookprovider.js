'use strict';

describe('Service: facebookProvider', function () {

  // load the service's module
  beforeEach(module('birraApp'));

  // instantiate service
  var facebookProvider;
  beforeEach(inject(function (_facebookProvider_) {
    facebookProvider = _facebookProvider_;
  }));

  it('should do something', function () {
    expect(!!facebookProvider).toBe(true);
  });

});
