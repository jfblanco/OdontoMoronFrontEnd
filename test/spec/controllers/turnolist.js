'use strict';

describe('Controller: TurnolistCtrl', function () {

  // load the controller's module
  beforeEach(module('odontoMoronFrontendApp'));

  var TurnolistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TurnolistCtrl = $controller('TurnolistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
