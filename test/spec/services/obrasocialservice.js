'use strict';

describe('Service: ObraSocialService', function () {

  // load the service's module
  beforeEach(module('odontoMoronFrontendApp'));

  // instantiate service
  var ObraSocialService;
  beforeEach(inject(function (_ObraSocialService_) {
    ObraSocialService = _ObraSocialService_;
  }));

  it('should do something', function () {
    expect(!!ObraSocialService).toBe(true);
  });

});
