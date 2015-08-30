'use strict';

describe('Service: OperatoriaService', function () {

  // load the service's module
  beforeEach(module('odontoMoronFrontendApp'));

  // instantiate service
  var OperatoriaService;
  beforeEach(inject(function (_OperatoriaService_) {
    OperatoriaService = _OperatoriaService_;
  }));

  it('should do something', function () {
    expect(!!OperatoriaService).toBe(true);
  });

});
