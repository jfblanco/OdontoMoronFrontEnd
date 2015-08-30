'use strict';

describe('Service: TurnoService', function () {

  // load the service's module
  beforeEach(module('odontoMoronFrontendApp'));

  // instantiate service
  var TurnoService;
  beforeEach(inject(function (_TurnoService_) {
    TurnoService = _TurnoService_;
  }));

  it('should do something', function () {
    expect(!!TurnoService).toBe(true);
  });

});
