'use strict';

/**
 * @ngdoc function
 * @name odontoMoronFrontendApp.controller:AtencionmodalCtrl
 * @description
 * # AtencionmodalCtrl
 * Controller of the odontoMoronFrontendApp
 */
angular.module('odontoMoronFrontendApp')
  .controller('AtencionmodalCtrl', ['$scope','$modalInstance','getTurno','OperatoriaService' ,function ($scope,$modalInstance, getTurno, OperatoriaService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.operatoriaDTO = {
    						  operatoria:  null
    					   }

    $scope.turno = getTurno;

    OperatoriaService.query().$promise.then(
    	function(operatorias)
    	{
    		$scope.operatorias = operatorias;
    	});

    $scope.cerrarTurno = function(){
		console.log($scope.turno);
	}


  }]);
