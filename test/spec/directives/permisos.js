'use strict';

describe('Directive: Permisos', function () {

  // load the directive's module
  beforeEach(module('odontoMoronFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-permisos></-permisos>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the Permisos directive');
  }));
});
