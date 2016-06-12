'use strict';

/**
 * @ngdoc function
 * @name yourApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yourApp
 */
angular.module('firstAngularAppApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();

    $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location
        });
    };
  });
