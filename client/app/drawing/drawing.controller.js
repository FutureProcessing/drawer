'use strict';

angular.module('drawerApp')
  .controller('DrawingController', function ($scope, PersonService, toaster, ConfigService) {
    $scope.persons = [];
    $scope.person = {};
    $scope.selectedPerson = {};
    $scope.from = new Date();
    $scope.to = new Date();
    $scope.bar = {};
    $scope.data = [];
    $scope.labels = [];
    $scope.empty = true;
    $scope.drawn = false;

    function initialize() {
      ConfigService.getConfig().then(function (response) {
        $scope.config = response.data;
      });
      PersonService.getPersons().then(function (response) {
        $scope.persons = response.data;

        for (var i = 0; i < $scope.persons.length; i++) {
          if ($scope.persons[i].participate) {
            $scope.empty = false;
            return;
          }
        }
      });
    }

    initialize();

    $scope.drawClicked = function () {
      var personIndex = drawPersonIndex();
      $scope.person = angular.copy($scope.persons[personIndex]);
      $scope.person.draws.push(moment());
      $scope.person.participate = !$scope.config.drawOnce;
      PersonService.updatePerson($scope.person).success(function (person) {
        $scope.persons[personIndex] = person;
        $scope.drawn = true;
      });
      for (var i = 0; i < $scope.persons.length; i++) {
        if ($scope.persons[i].participate) {
          $scope.empty = false;
          return;
        }
      }
    };

    var drawPersonIndex = function () {
      var index = Math.floor((Math.random() * $scope.persons.length));
      while ($scope.config.drawOnce && $scope.persons[index].participate !== true) {
        index = Math.floor((Math.random() * $scope.persons.length));
      }
      return index;
    };

    function updatePerson(person) {
      $scope.persons.push(person);
    }

    $scope.drawOnceChanged = function () {
      ConfigService.updateConfig($scope.config);
      if (!$scope.config.drawOnce) {
        PersonService.getPersons().then(function(response) {
          var persons = response.data;
          $scope.persons = [];
          for (var i = 0; i < persons.length; i++) {
            var person = persons[i];
            person.participate = true;
            PersonService.updatePerson(person).then(updatePerson(person));
          }
        });
      }
    };
  });
