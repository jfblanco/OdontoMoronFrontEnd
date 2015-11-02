'use strict';

/**
 * @ngdoc service
 * @name odontoMoronFrontendApp.ObraSocialService
 * @description
 * # ObraSocialService
 * Service in the odontoMoronFrontendApp.
 */
angular.module('odontoMoronFrontendApp')
  .service('ObraSocialService',[ '$resource','VaribleService',  function ($resource,VaribleService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var service = $resource(VaribleService.url()+'/obraSocials/:id');

    return service;
  }]);
