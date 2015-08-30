'use strict';

/**
 * @ngdoc function
 * @name odontoMoronFrontendApp.controller:PacientenewCtrl
 * @description
 * # PacientenewCtrl
 * Controller of the odontoMoronFrontendApp
 */
angular.module('odontoMoronFrontendApp')
  .controller('PacientenewCtrl', ['$scope','PacienteService', function ($scope,PacienteService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

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
      });
  }
  }]);
