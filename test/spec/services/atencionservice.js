'use strict';

describe('Service: AtencionService', function () {

  // load the service's module
  beforeEach(module('odontoMoronFrontendApp'));

  // instantiate service
  var AtencionService;
  beforeEach(inject(function (_AtencionService_) {
    AtencionService = _AtencionService_;
  }));

  it('should do something', function () {
    expect(!!AtencionService).toBe(true);
  });

});
