'use strict';

describe('Directive: personCard', function () {

  // load the directive's module
  beforeEach(module('birthdayApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<person-card></person-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the personCard directive');
  }));
});
