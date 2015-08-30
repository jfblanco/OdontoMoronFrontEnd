'use strict';

/**
 * @ngdoc service
 * @name odontoMoronFrontendApp.PacienteService
 * @description
 * # PacienteService
 * Service in the odontoMoronFrontendApp.
 */
angular.module('odontoMoronFrontendApp')
  .service('PacienteService', ['$resource', 'VaribleService', function ($resource,VaribleService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var service = $resource(VaribleService.url()+'/pacientes/:id', {}, {
        'buscarPorNumeroAsociado': { method: 'GET', url: VaribleService.url()+'/pacientesnumerosocio/:numeroAsociado'}
      });
    return service;
  }]);
