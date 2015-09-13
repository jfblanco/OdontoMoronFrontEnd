'use strict';

/**
 * @ngdoc function
 * @name odontoMoronFrontendApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the odontoMoronFrontendApp
 */
angular.module('odontoMoronFrontendApp')
  .controller('MenuCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pacienteMenu = false;
    $scope.turnoMenu = false;
    $scope.atencionMenu = false;
    $scope.operatoriaMenu = false;

    $scope.$on("userLoggedIn",function(event,args) {
	    if(args.rol == "ROLE_ADMINISTRADOR")
	    {
	    	$scope.pacienteMenu = true;
		    $scope.turnoMenu = true;
		    $scope.atencionMenu = false;
		    $scope.operatoriaMenu = false;
	    }
	    if(args.rol == "ROLE_USER")
	    {
	    	$scope.pacienteMenu = true;
		    $scope.turnoMenu = true;
		    $scope.atencionMenu = true;
		    $scope.operatoriaMenu = true;
	    }
	    if(args.rol == "ROLE_ODONTOLOGO")
	    {
	    	$scope.pacienteMenu = false;
		    $scope.turnoMenu = false;
		    $scope.atencionMenu = true;
		    $scope.operatoriaMenu = false;
	    }
	});

	$scope.$on("userLoggedOff",function(event,args) {
	    $scope.pacienteMenu = false;
	    $scope.turnoMenu = false;
	    $scope.atencionMenu = false;
	    $scope.operatoriaMenu = false;
	});
  });
