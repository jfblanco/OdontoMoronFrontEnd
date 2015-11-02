'use strict';

/**
 * @ngdoc function
 * @name odontoMoronFrontendApp.controller:ObrasociallistCtrl
 * @description
 * # ObrasociallistCtrl
 * Controller of the odontoMoronFrontendApp
 */
angular.module('odontoMoronFrontendApp')
  .controller('ObrasociallistCtrl', ['$scope','ObraSocialService', 'LoginService', '$modal', 'OperatoriaService','VaribleService', function ($scope,ObraSocialService,LoginService,$modal,OperatoriaService,VaribleService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.operatoriaDTO = {codigo: null, description: null, precio: null, obraSocial:{id: 0}};
    $scope.operatorias = [];

    ObraSocialService.query().$promise.then(
    	function(obras)
    	{
			$scope.obrasSociales = obras;
		});

	$scope.buscarObraSocial = function(){
		ObraSocialService.get({id: $scope.obraSocial.id}).$promise.then(
			function(obrasocial){
				$scope.operatorias = obrasocial.operatorias;
			});
	}

	$scope.agregarOperatoria = function(){
		var modalInstance = $modal.open({
		      templateUrl: 'views/operatoriamodal.html',
		      controller: 'OperatoriamodalCtrl',
		      scope: $scope,
		      resolve: {
		        obraSocialId: function () {
		          return $scope.obraSocial.id;
		        }
		      }
	    });

	    modalInstance.result.then(function (operatoria) {
	        $scope.operatoriaDTO = operatoria;
	        $scope.operatoriaDTO.obraSocial.id = $scope.obraSocial.id;
	        OperatoriaService.save($scope.operatoriaDTO).$promise.then(
	        	function(result)
	        	{
	        		$scope.operatorias.push(operatoria);
	        	});
	    }, function () {
	      	$scope.operatoriaDTO = {codigo: null, description: null, precio: null, obraSocial:{id: 0}};
	    });
	}
    
  }]);
