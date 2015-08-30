'use strict';

describe('Controller: PacientelistCtrl', function () {

  // load the controller's module
  beforeEach(module('odontoMoronFrontendApp'));

  var PacientelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PacientelistCtrl = $controller('PacientelistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
