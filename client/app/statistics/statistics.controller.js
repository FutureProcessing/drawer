'use strict';

angular.module('drawerApp').controller('StatisticsController', function ($scope, PersonService, toaster, $filter) {

  var MIN_DATE = moment(-8640000000000000);
  var MAX_DATE = moment(8640000000000000);
  var DAY_BEGINNING = {hours: 0, minutes: 0, seconds: 0, millis: 0};
  var DAY_END = {hours: 23, minutes: 59, seconds: 59, millis: 999};

  $scope.dbPersons = [];
  $scope.persons = [];
  $scope.selectedPerson = {};
  $scope.from = {};
  $scope.to = {};
  $scope.chart = {data: [], labels: []};
  var $translate = $filter('translate');

  function setPersonChartData(personIndex) {
    var person = $scope.persons[personIndex];
    $scope.chart.labels.push(person.name + ' ' + person.surname);
    var chartData = $scope.chart.data;
    chartData.push([]);
    chartData[0].push(person.draws.length);
  }

  function setPersonsChartData() {
    for (var i = 0; i < $scope.persons.length; i++) {
      setPersonChartData(i);
    }
  }

  function initialize() {
    PersonService.getPersons().then(function (response) {
      $scope.dbPersons = response.data;
      $scope.persons = angular.copy($scope.dbPersons);
      setPersonsChartData();
    });
  }

  function createDate(date, defaultMillis, hours) {
    if (_.isEmpty(date)) {
      date = moment(defaultMillis);
    } else {
      date.setHours(hours.hours, hours.minutes, hours.seconds, hours.millis);
    }
    return date;
  }

  function filter(personIndex, from, to) {
    var person = $scope.persons[personIndex];
    person.draws = [];
    var draws = $scope.dbPersons[personIndex].draws;
    for (var j = 0; j < draws.length; j++) {
      var draw = moment(draws[j]);
      if (draw >= from && draw <= to) {
        person.draws.push(draw);
      }
    }
  }

  function validateDates(from, to) {
    if (from > to) {
      toaster.pop('error', $translate('STATISTICS.INVALID_DATES.TITLE'), $translate('STATISTICS.INVALID_DATES.MESSAGE'));
      return false;
    }
    return true;
  }

  function filterDraws() {
    var from = createDate(angular.copy($scope.from), MIN_DATE, DAY_BEGINNING);
    var to = createDate(angular.copy($scope.to), MAX_DATE, DAY_END);
    if (!validateDates(from, to)) {
      return;
    }
    $scope.persons = angular.copy($scope.dbPersons);
    for (var i = 0; i < $scope.persons.length; i++) {
      filter(i, from, to);
    }
  }

  function setChartData() {
    $scope.chart.labels = [];
    $scope.chart.data = [];
    setPersonsChartData();
  }

  $scope.filter = function () {
    filterDraws();
    setChartData();
  };

  $scope.personSelected = function (person) {
    $scope.selectedPerson = person;
  };

  initialize();
});
