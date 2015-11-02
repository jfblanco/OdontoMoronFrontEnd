'use strict';

/**
 * @ngdoc function
 * @name odontoMoronFrontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the odontoMoronFrontendApp
 */
angular.module('odontoMoronFrontendApp')
  .controller('LoginCtrl', [ '$scope', 'LoginService', '$location', function ($scope,LoginService,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.isCollapsed = true;

    $scope.usuarioDTO = {name: null, pass: null};

    $scope.login = function(){
    	LoginService.login({username: $scope.usuarioDTO.name, password: $scope.usuarioDTO.pass}, 
    		function(result)
    		{
    			$location.path( "/" )
    		},
        function(data, result)
        {
          $scope.isCollapsed = false;
        });
    }

    $scope.removerModal = function(){
      $scope.isCollapsed = true;
    }

  }]);
