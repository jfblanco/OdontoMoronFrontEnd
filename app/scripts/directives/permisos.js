'use strict';

/**
 * @ngdoc directive
 * @name odontoMoronFrontendApp.directive:Permisos
 * @description
 * # Permisos
 */
angular.module('odontoMoronFrontendApp')
  .directive('permisos', ['$cookies', function ($cookies) {
    return {
      attrs: 'roles',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var userData = $cookies.get('userDataRol');
        var roles = attrs.roles.split(',');
        if(roles.indexOf(userData) == -1)
        	element.hide(true);
      }
    };
  }]);
