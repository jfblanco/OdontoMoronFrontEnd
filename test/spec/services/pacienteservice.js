'use strict';

describe('Service: PacienteService', function () {

  // load the service's module
  beforeEach(module('odontoMoronFrontendApp'));

  // instantiate service
  var PacienteService;
  beforeEach(inject(function (_PacienteService_) {
    PacienteService = _PacienteService_;
  }));

  it('should do something', function () {
    expect(!!PacienteService).toBe(true);
  });

});
