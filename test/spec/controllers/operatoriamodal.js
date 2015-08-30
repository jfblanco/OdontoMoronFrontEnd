'use strict';

describe('Controller: OperatoriamodalCtrl', function () {

  // load the controller's module
  beforeEach(module('odontoMoronFrontendApp'));

  var OperatoriamodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OperatoriamodalCtrl = $controller('OperatoriamodalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
