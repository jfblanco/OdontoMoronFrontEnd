'use strict';

describe('Controller: ObrasocialnewCtrl', function () {

  // load the controller's module
  beforeEach(module('odontoMoronFrontendApp'));

  var ObrasocialnewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ObrasocialnewCtrl = $controller('ObrasocialnewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
