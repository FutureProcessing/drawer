'use strict';

angular.module('drawerApp')
  .service('ConfigService', function ($http) {

    this.getConfig = function () {
      return $http.get('/api/config');
    };

    this.updateConfig = function (config) {
      return $http.patch('/api/config/' + config._id, config);
    };
  });
