'use strict';

/**
 * @ngdoc service
 * @name firstAngularAppApp.current
 * @description
 * # current
 * Factory in the firstAngularAppApp.
 */
  angular.module('firstAngularAppApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=441c45953ff91f82479436265072ab51', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us'
        },
        isArray:false
      }
    });
  });
