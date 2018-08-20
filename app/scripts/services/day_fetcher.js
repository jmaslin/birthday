'use strict';

/**
 * @ngdoc service
 * @name birthdayApp.dayFetcher
 * @description
 * # dayFetcher
 * Factory in the birthdayApp.
 */
angular.module('birthdayApp')
  .factory('dayFetcher', function ($http, $location) {
    // Service logic
    var basePath = $location.absUrl();

    var buildFileName = function buildFileName (dayNumber) {
      // Subtract one from dayNumber since the file names start at 0.
      var fileName = (dayNumber - 1) + '.json';
      return fileName;      
    };

    var loadBirthdayData = function loadBirthdayData (dayNumber) {
      var fileName = buildFileName(dayNumber);
      var location = basePath + 'data/birthdays/';

      return $http.get(location+fileName).then(function (response) {
        return response.data.people;
      });
    };

    // Public API here
    var service = {};

    service.getBirthdaysForDay = function getBirthdaysForDay (dayNumber) {
      return loadBirthdayData(dayNumber);
    };

    return service;
  });
