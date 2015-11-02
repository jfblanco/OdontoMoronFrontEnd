'use strict';

/**
 * @ngdoc function
 * @name odontoMoronFrontendApp.controller:LiquidacionlistCtrl
 * @description
 * # LiquidacionlistCtrl
 * Controller of the odontoMoronFrontendApp
 */
angular.module('odontoMoronFrontendApp')
  .controller('LiquidacionlistCtrl',['$scope','UsuarioService','AtencionService', function ($scope,UsuarioService,AtencionService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.odontologos = [];

    $scope.atenciones = [];

    $scope.odontologoDTO = null;

    UsuarioService.buscarOdontologo().$promise.then(
      function(odontologos)
      {
        for(var i = 0; i < odontologos.length; i++)
          $scope.odontologos.push(odontologos[i][0]);
      });

    $scope.buscarAtencionesEnElMes = function()
    {
    	$scope.atenciones = [];
    	$scope.total = 0;
    	AtencionService.buscarAtencionesDelMes({id: $scope.odontologoDTO.id}).$promise.then(
	      function(atenciones)
	      {
	        for(var i = 0; i < atenciones.length; i++)
	        {
	        	$scope.total += atenciones[i].egreso;
	            $scope.atenciones.push(atenciones[i]);
	      	}
	      });
    }

  }]);
