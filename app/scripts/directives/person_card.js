'use strict';

/**
 * @ngdoc directive
 * @name birthdayApp.directive:personCard
 * @description
 * # personCard
 */
angular.module('birthdayApp')
  .directive('personCard', function () {
    return {
      templateUrl: 'views/person_card.html',
      restrict: 'E',
      scope: {
        person: '='
      }
    };
  });
