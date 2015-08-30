'use strict';

/**
 * @ngdoc overview
 * @name odontoMoronFrontendApp
 * @description
 * # odontoMoronFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('odontoMoronFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/paciente/new', {
        templateUrl: 'views/pacientenew.html',
        controller: 'PacientenewCtrl'
      })
      .when('/paciente/list', {
        templateUrl: 'views/pacientelist.html',
        controller: 'PacientelistCtrl'
      })
      .when('/turno/list', {
        templateUrl: 'views/turnolist.html',
        controller: 'TurnolistCtrl'
      })
      .when('/turno/new', {
        templateUrl: 'views/turnonew.html',
        controller: 'TurnonewCtrl'
      })
      .when('/obrasocial/new', {
        templateUrl: 'views/obrasocialnew.html',
        controller: 'ObrasocialnewCtrl'
      })
      .when('/obrasocial/list', {
        templateUrl: 'views/obrasociallist.html',
        controller: 'ObrasociallistCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(['$httpProvider', function($httpProvider) {  
    $httpProvider.interceptors.push('HTTPInterceptor');
}]);
