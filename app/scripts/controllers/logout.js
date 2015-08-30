'use strict';

/**
 * @ngdoc function
 * @name odontoMoronFrontendApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the odontoMoronFrontendApp
 */
angular.module('odontoMoronFrontendApp')
  .controller('LogoutCtrl', ['$scope','$cookies','$location', function ($scope,$cookies,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $cookies.remove('userToken');
    $location.path( "/login" );
  }]);
