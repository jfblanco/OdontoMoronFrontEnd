'use strict';

/**
 * @ngdoc function
 * @name odontoMoronFrontendApp.controller:OperatoriamodalCtrl
 * @description
 * # OperatoriamodalCtrl
 * Controller of the odontoMoronFrontendApp
 */
angular.module('odontoMoronFrontendApp')
  .controller('OperatoriamodalCtrl', ['$scope','$modalInstance', function ($scope,$modalInstance, obraSocialId) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.operatoriaDTO = {codigo: null, description: null, precio: null, obraSocial:{id: 0}};

	$scope.guardarOperatoria = function(){
		console.log($scope.operatoriaDTO);
		$modalInstance.close($scope.operatoriaDTO);
	}
  }]);
