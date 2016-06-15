angular.module('yourApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=441c45953ff91f82479436265072ab51', {}, {
      find: {6
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });
