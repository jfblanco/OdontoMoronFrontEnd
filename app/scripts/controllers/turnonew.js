'use strict';

/**
 * @ngdoc function
 * @name odontoMoronFrontendApp.controller:TurnonewCtrl
 * @description
 * # TurnonewCtrl
 * Controller of the odontoMoronFrontendApp
 */
angular.module('odontoMoronFrontendApp')
  .controller('TurnonewCtrl', ['$scope', 'PacienteService', 'TurnoService','UsuarioService',function ($scope,PacienteService,TurnoService,UsuarioService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.odontologos = [];

    $scope.correctoAlerta = true;

    $scope.warningAlerta = true;

    $scope.errorAlerta = true;

    $scope.hstep = 1;
  
    $scope.mstep = 30;

    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [0, 30]
    };

  $scope.ismeridian = true;

    $scope.turnoDTO = {
    		paciente: null,
    		sobreturno: false,
        odontologo: null,
    		fecha: new Date()
    }

    $scope.pacienteDTO = {
    	id: null,
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

    UsuarioService.buscarOdontologo().$promise.then(
      function(odontologos)
      {
        for(var i = 0; i < odontologos.length; i++)
          $scope.odontologos.push(odontologos[i][0]);
      });

    $scope.removerCollapse = function()
    {
      $scope.correctoAlerta = true;
      $scope.warningAlerta = true;
      $scope.errorAlerta = true;
    }

    $scope.buscarPaciente = function()
    {
    	PacienteService.buscarPorNumeroAsociado({numeroAsociado: $scope.pacienteDTO.numeroAsociado}).$promise.then(
    		function(result)
    		{
    			$scope.pacienteDTO = {
    				id: result.id,
			    	numeroAsociado: result.numeroAsociado,
			    	apellido: result.apellido,
			    	nombre: result.nombre,
			    	fechaNacimiento: result.fechaNacimiento,
			    	sexo: result.sexo,
			    	dni: result.dni,
            obraSocial: result.obraSocial
			    }
			    $scope.turnoDTO.paciente = $scope.pacienteDTO;
    		},
        function(error)
        {
          $scope.warningAlerta = false;
        });
    }

    $scope.guardarTurno = function()
    {
    	TurnoService.save($scope.turnoDTO).$promise.then(
    		function(result)
    		{
    			$scope.turnoDTO = {
		    		paciente: null,
		    		sobreturno: false,
		    		fecha: new Date()
			    }
			    $scope.pacienteDTO = {
			    	id: null,
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

  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scope.mytime = d;
  };

  $scope.changed = function () {
    $log.log('Time changed to: ' + $scope.mytime);
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };

  }]);
