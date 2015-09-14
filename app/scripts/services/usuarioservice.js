'use strict';

/**
 * @ngdoc service
 * @name odontoMoronFrontendApp.UsuarioService
 * @description
 * # UsuarioService
 * Service in the odontoMoronFrontendApp.
 */
angular.module('odontoMoronFrontendApp')
  .service('UsuarioService', ['$resource','VaribleService', function ($resource,VaribleService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var service = $resource(VaribleService.url()+'/users/:id', {}, {
        'buscarOdontologo': { method: 'GET', isArray:true, url: VaribleService.url()+'/users/odontologos'}
      });
    return service;
  }]);
