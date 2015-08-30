'use strict';

/**
 * @ngdoc service
 * @name odontoMoronFrontendApp.HTTPInterceptor
 * @description
 * # HTTPInterceptor
 * Factory in the odontoMoronFrontendApp.
 */
angular.module('odontoMoronFrontendApp')
  .factory('HTTPInterceptor', ['$log','$cookies','$location',function ($log,$cookies,$location) {    

    var sessionInjector = {
        request: function(config) {
            if($cookies.get('userToken')){
              config.headers['Access-Control-Allow-Origin'] = "http://odontomoron.com.ar";
              config.headers['x-auth-token'] = $cookies.get('userToken');
            }else{
              $location.path( "/login" );
            }
            return config;
        }
    };
    return sessionInjector;

  }]);
