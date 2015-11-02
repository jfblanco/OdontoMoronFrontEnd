'use strict';

/**
 * @ngdoc function
 * @name odontoMoronFrontendApp.controller:AtencionmodalCtrl
 * @description
 * # AtencionmodalCtrl
 * Controller of the odontoMoronFrontendApp
 */
angular.module('odontoMoronFrontendApp')
  .controller('AtencionmodalCtrl', ['$scope','$window','$modalInstance','getTurno','OperatoriaService','AtencionService' ,function ($scope,$window,$modalInstance, getTurno, OperatoriaService,AtencionService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.operatoriaDTO = {
                  egreso: null,
                  ingreso: null,
                  turno: null,
                  fecha: new Date(),
    						  operatoria:  null
    					   }

    $scope.turno = getTurno;

    OperatoriaService.buscarPorPaciente({id: $scope.turno.paciente.id}).$promise.then(
    	function(operatorias)
    	{
    		$scope.operatorias = operatorias;
    	});

    $scope.cambiarPrecio = function(_precio)
    {
      $scope.operatoriaDTO.ingreso = $scope.operatoriaDTO.operatoria.precio;
    }

    $scope.cerrarTurno = function()
    {
      $scope.operatoriaDTO.paciente = $scope.turno.paciente;
      $scope.operatoriaDTO.odontologo = $scope.turno.odontologo;
      $scope.operatoriaDTO.turno = $scope.turno;
		  AtencionService.save($scope.operatoriaDTO).$promise.then(function(result)
        {
            $modalInstance.close($scope.turno.id);
        });
	  }


  }]);
