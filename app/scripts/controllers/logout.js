'use strict';

/**
 * @ngdoc function
 * @name odontoMoronFrontendApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the odontoMoronFrontendApp
 */
angular.module('odontoMoronFrontendApp')
  .controller('LogoutCtrl', ['$scope','$cookies','$rootScope','$location', function ($scope,$cookies,$rootScope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $cookies.remove('userToken');
    $rootScope.$broadcast('userLoggedOff',{id:0});
    $location.path( "/login" );
  }]);
