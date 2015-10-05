'use strict';

/**
 * @ngdoc function
 * @name odontoMoronFrontendApp.controller:TurnolistCtrl
 * @description
 * # TurnolistCtrl
 * Controller of the odontoMoronFrontendApp
 */
angular.module('odontoMoronFrontendApp')
  .controller('TurnolistCtrl',['$scope','$modal','UsuarioService','TurnoService', function ($scope,$modal,UsuarioService,TurnoService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.odontologoDTO = null;

    $scope.odontologos = [];

    UsuarioService.buscarOdontologo().$promise.then(
      function(odontologos)
      {
        for(var i = 0; i < odontologos.length; i++)
          $scope.odontologos.push(odontologos[i][0]);
      });

    $scope.buscarPacientesParaElDia = function()
    {
    	if($scope.odontologoDTO != null)
    	{
	    	TurnoService.buscarPorOdontologo({id: $scope.odontologoDTO.id}).$promise.then(
	    	function(_pacientes)
	    	{
	    		$scope.turnos = _pacientes;
	    	});
	    }
    }

    $scope.cerrarTurno = function(turno)
    {
        var modalInstance = $modal.open({
            templateUrl: '../../views/atencionmodal.html',
            controller: 'AtencionmodalCtrl',
            scope: $scope,
            resolve: {
              getTurno: function () {
                return turno;
              }
            }
        });
    }

  }]);
