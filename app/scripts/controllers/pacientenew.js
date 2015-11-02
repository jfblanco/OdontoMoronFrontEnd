'use strict';

/**
 * @ngdoc function
 * @name odontoMoronFrontendApp.controller:PacientenewCtrl
 * @description
 * # PacientenewCtrl
 * Controller of the odontoMoronFrontendApp
 */
angular.module('odontoMoronFrontendApp')
  .controller('PacientenewCtrl', ['$scope','PacienteService','ObraSocialService', function ($scope,PacienteService,ObraSocialService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    ObraSocialService.query().$promise.then(
      function(obras)
      {
      $scope.obrasSociales = obras;
    });

    $scope.errorAlerta = true;

    $scope.correctoAlerta = true;

    $scope.pacienteDTO = {
    	numeroAsociado: null,
    	apellido: null,
    	nombre: null,
    	fechaNacimiento: null,
    	sexo: "m",
    	domicilio: null,
    	telefono: null,
    	celular: null,
    	dni: null,
      numeroDeAfiliado: null,
      lugarDeTrabajo: null,
      parentezcoConElAsociado: null,
      condicionDeFacturacion: null,
      plan: null,
      correoElectronico: null,
      codigoPostal: null,
      obraSocial: {id:4}
    }

    $scope.today = function() {
    	$scope.pacienteDTO.fechaNacimiento = new Date();
  	};
  	$scope.today();

	$scope.clear = function () {
		$scope.pacienteDTO.fechaNacimiento = null;
	};

	$scope.disabled = function(date, mode) {
		return 0;
	};

	$scope.toggleMin = function() {
		$scope.minDate = $scope.minDate ? null : new Date();
	};
  	$scope.toggleMin();

	$scope.open = function($event) {
		$scope.status.opened = true;
	};

	$scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  $scope.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };

  $scope.guardarPaciente = function(){
  	PacienteService.save($scope.pacienteDTO).$promise.then(
      function(result)
      {
          $scope.pacienteDTO = {
            numeroAsociado: null,
            apellido: null,
            nombre: null,
            fechaNacimiento: null,
            sexo: "m",
            domicilio: null,
            telefono: null,
            celular: null,
            dni: null
          }
          $scope.correctoAlerta = false;
      },
      function(error)
      {
        $scope.errorAlerta = false;
      });
  }

  $scope.removerCollapse = function()
  {
    $scope.errorAlerta = true;
    $scope.correctoAlerta = true;
  }

  }]);
