'use strict';

describe('Service: HTTPInterceptor', function () {

  // load the service's module
  beforeEach(module('odontoMoronFrontendApp'));

  // instantiate service
  var HTTPInterceptor;
  beforeEach(inject(function (_HTTPInterceptor_) {
    HTTPInterceptor = _HTTPInterceptor_;
  }));

  it('should do something', function () {
    expect(!!HTTPInterceptor).toBe(true);
  });

});
