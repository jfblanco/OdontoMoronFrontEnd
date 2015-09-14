'use strict';

describe('Controller: MenuprincipalCtrl', function () {

  // load the controller's module
  beforeEach(module('odontoMoronFrontendApp'));

  var MenuprincipalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuprincipalCtrl = $controller('MenuprincipalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
