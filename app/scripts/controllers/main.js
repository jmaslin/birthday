'use strict';

/**
 * @ngdoc function
 * @name birthdayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the birthdayApp
 */
angular.module('birthdayApp')
  .controller('MainCtrl', function ($scope, $log, $timeout, birthdayFetcher) {

    $scope.date = new Date();
    var person;

    $scope.changeDate = function changeDate (date) {
      birthdayFetcher.getPeopleForDay(date).then(function () {
        $scope.getPerson();
      });
    };

    $scope.getPerson = function getPerson () {
      delete $scope.person;
      $timeout(function () {
        $log.debug("Get new person.");
        $scope.person = birthdayFetcher.getRandomPerson();
      }, 50);
    };

    $scope.changeDate($scope.date);

  });
