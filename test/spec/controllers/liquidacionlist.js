'use strict';

describe('Controller: LiquidacionlistCtrl', function () {

  // load the controller's module
  beforeEach(module('odontoMoronFrontendApp'));

  var LiquidacionlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LiquidacionlistCtrl = $controller('LiquidacionlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
