'use strict';

describe('Service: birthdayFetcher', function () {

  // load the service's module
  beforeEach(module('birthdayApp'));

  // instantiate service
  var birthdayFetcher;
  beforeEach(inject(function (_birthdayFetcher_) {
    birthdayFetcher = _birthdayFetcher_;
  }));

  it('exists', function () {
    expect(!!birthdayFetcher).toBe(true);
  });

  describe('changeDay', function () {
    
    var date = moment('01/02/16', 'MM/DD/YY'),
        expected = '2';

    it('updates the day', function () {
      expect(birthdayFetcher.getDay()).not.toEqual(expected);
      birthdayFetcher.setDay(date);
      expect(birthdayFetcher.getDay()).toEqual(expected);
    });

    it('loads a new list of people', function () {

    });
  });

  describe('getRandomPerson', function () {
    it('returns an object', function () {

    });
  });

});
