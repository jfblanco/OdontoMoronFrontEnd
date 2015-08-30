'use strict';

/**
 * @ngdoc service
 * @name odontoMoronFrontendApp.VaribleService
 * @description
 * # VaribleService
 * Service in the odontoMoronFrontendApp.
 */
angular.module('odontoMoronFrontendApp')
  .service('VaribleService', function () {
    var service = {};

    service.url = function(){
    	return "http://127.0.0.1:8080/api";
    }

    service.host = function(){
    	return "127.0.0.1:8080";
    }    

    return service;
  });
