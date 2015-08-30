'use strict';

/**
 * @ngdoc service
 * @name odontoMoronFrontendApp.OperatoriaService
 * @description
 * # OperatoriaService
 * Service in the odontoMoronFrontendApp.
 */
angular.module('odontoMoronFrontendApp')
  .service('OperatoriaService', [ '$resource', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = $resource('http://127.0.0.1:8080/api/operatorias/:id');

    return service;
  }]);
