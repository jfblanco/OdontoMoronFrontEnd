'use strict';

/**
 * @ngdoc service
 * @name odontoMoronFrontendApp.LoginService
 * @description
 * # LoginService
 * Service in the odontoMoronFrontendApp.
 */
angular.module('odontoMoronFrontendApp')
  .service('LoginService', ['$http', '$cookies','$rootScope','VaribleService', function ($http,$cookies,$rootScope,VaribleService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {};

    service.getUserData = function()
    {
        return $cookies['userData'];
    }

    service.getToken = function(){
    	return $cookies['userToken'];
    }

    service.login = function(credentials, callback, errorCallback) {
                var data = 'username=' + credentials.username +
                    '&password=' + credentials.password;

                return $http.post(VaribleService.url()+'/authenticate', data, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Access-Control-Allow-Origin': '*'
                    }
                }).success(function (response) {
                	$cookies.put('userToken',response.token);
                    $http.get(VaribleService.url()+'/account').success(
                        function(response)
                        {
                            $cookies.put('userDataRol',response.roles[0]);
                            $rootScope.$broadcast('userLoggedIn',{rol:response.roles[0]});
                        });
                    callback(response);
                }).error(function(data, response){
                    errorCallback(data,response);
                });
            }       

    return service;
  }]);
