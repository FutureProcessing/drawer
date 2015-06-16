'use strict';

angular.module('drawerApp')
  .service('PersonService', function ($http) {

    this.getPersons = function () {
      return $http.get('/api/person');
    };

    this.updatePerson = function (person) {
      return $http.patch('/api/person/' + person._id, person);
    };
  });
