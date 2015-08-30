'use strict';

/**
 * @ngdoc service
 * @name odontoMoronFrontendApp.LoginService
 * @description
 * # LoginService
 * Service in the odontoMoronFrontendApp.
 */
angular.module('odontoMoronFrontendApp')
  .service('LoginService', ['$http', '$cookies','VaribleService', function ($http,$cookies,VaribleService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {};

    service.getToken = function(){
    	return $cookies['userToken'];
    }

    service.login = function(credentials, callback) {
                var data = 'username=' + credentials.username +
                    '&password=' + credentials.password;

                return $http.post(VaribleService.url()+'/authenticate', data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Access-Control-Allow-Origin': '*'
                    }
                }).success(function (response) {
                	$cookies.put('userToken',response.token);
                    callback(response);
                });
            }       

    return service;
  }]);
