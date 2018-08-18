'use strict';

/**
 * @ngdoc service
 * @name birthdayApp.birthdayFetcher
 * @description
 * # birthdayFetcher
 * Factory in the birthdayApp.
 */
angular.module('birthdayApp')
  .factory('birthdayFetcher', function (dayFetcher, moment, $log) {
    // Service logic

    var self = {}, index = 0;

    var formatDateToDay = function formatDateToDay (date) {
      var DAY_NUMBER_OF_FEB_28 = 59;
      var isLeapYear = moment(date).isLeapYear();
      var dayNum = Number(moment(date).format('DDD')); //moment returns 1 indexed string
      if (!isLeapYear && dayNum > DAY_NUMBER_OF_FEB_28) {
          dayNum ++;
      }
      return String(dayNum)
    };

    var getPeopleList = function getPeopleList () {
      return dayFetcher.getBirthdaysForDay(self.day).then(function (peopleList) {
        shuffleArray(peopleList);

        delete self.people;
        self.people = peopleList;
      });
    };

    // -> Fisher–Yates shuffle algorithm
    var shuffleArray = function(array) {
      var m = array.length, t, i;

      // While there remain elements to shuffle
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    }

    // Public API here
    var service = {};

    service.getPeopleForDay = function getPeopleForDay (date) {
      self.day =  formatDateToDay(date);
      self.index = 0;

      return getPeopleList();
    };

    service.getRandomPerson = function getRandomPerson() {
      var person = self.people[index];
      index ++;
      return person;
    };

    return service;
  });
