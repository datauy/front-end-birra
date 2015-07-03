'use strict';

describe('Filter: beerFilter', function () {

  // load the filter's module
  beforeEach(module('birraApp'));

  // initialize a new instance of the filter before each test
  var beerFilter;
  beforeEach(inject(function ($filter) {
    beerFilter = $filter('beerFilter');
  }));

  it('should return the input prefixed with "beerFilter filter:"', function () {
    var text = 'angularjs';
    expect(beerFilter(text)).toBe('beerFilter filter: ' + text);
  });

});
