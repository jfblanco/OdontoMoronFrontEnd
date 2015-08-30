'use strict';

describe('Service: VaribleService', function () {

  // load the service's module
  beforeEach(module('odontoMoronFrontendApp'));

  // instantiate service
  var VaribleService;
  beforeEach(inject(function (_VaribleService_) {
    VaribleService = _VaribleService_;
  }));

  it('should do something', function () {
    expect(!!VaribleService).toBe(true);
  });

});
