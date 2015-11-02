'use strict';

/**
 * @ngdoc service
 * @name odontoMoronFrontendApp.OperatoriaService
 * @description
 * # OperatoriaService
 * Service in the odontoMoronFrontendApp.
 */
angular.module('odontoMoronFrontendApp')
  .service('OperatoriaService', [ '$resource','VaribleService', function ($resource,VaribleService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = $resource(VaribleService.url()+'/operatorias/:id', {}, {
        'buscarPorPaciente': { method: 'GET', isArray: true, url: VaribleService.url()+'/operatorias/operatoriasporusuario/:id'}
      });

    return service;
  }]);
