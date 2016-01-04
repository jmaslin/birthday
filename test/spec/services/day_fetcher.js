'use strict';

describe('Service: dayFetcher', function () {

  // load the service's module
  beforeEach(module('birthdayApp'));

  // instantiate service
  var dayFetcher, moment;
  beforeEach(inject(function (_dayFetcher_, _moment_) {
    dayFetcher = _dayFetcher_;
    moment = _moment_;
  }));

  it('exists', function () {
    expect(!!dayFetcher).toBe(true);
  });

  describe('getBirthdaysForDay', function () {
    var dayOfYear = 100;

    it('returns a promise', function () {
      expect(dayFetcher.getBirthdaysForDay().then).toEqual(jasmine.any(Function));
    });

  });

});
