'use strict';

/**
 * @ngdoc service
 * @name odontoMoronFrontendApp.AtencionService
 * @description
 * # AtencionService
 * Service in the odontoMoronFrontendApp.
 */
angular.module('odontoMoronFrontendApp')
  .service('AtencionService', [ '$resource','VaribleService',  function ($resource,VaribleService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var service = $resource(VaribleService.url()+'/atencions/:id', {}, {
        'buscarAtencionesDelMes': { method: 'GET', isArray: true, url: VaribleService.url()+'/atencions/buscaratencionesdelmes/:id'}
      });
     return service;
  }]);
