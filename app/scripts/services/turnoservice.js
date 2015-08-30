'use strict';

/**
 * @ngdoc service
 * @name odontoMoronFrontendApp.TurnoService
 * @description
 * # TurnoService
 * Service in the odontoMoronFrontendApp.
 */
angular.module('odontoMoronFrontendApp')
  .service('TurnoService', ['$resource', 'VaribleService', function ($resource,VaribleService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = $resource(VaribleService.url()+'/turnos/:id');
    return service;
  }]);
