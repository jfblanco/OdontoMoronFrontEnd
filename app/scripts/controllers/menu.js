'use strict';

/**
 * @ngdoc function
 * @name odontoMoronFrontendApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the odontoMoronFrontendApp
 */
angular.module('odontoMoronFrontendApp')
  .controller('MenuCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];    
  }]);
