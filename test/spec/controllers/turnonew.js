'use strict';

describe('Controller: TurnonewCtrl', function () {

  // load the controller's module
  beforeEach(module('odontoMoronFrontendApp'));

  var TurnonewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TurnonewCtrl = $controller('TurnonewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
