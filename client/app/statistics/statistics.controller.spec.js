'use strict';

describe('Controller: StatisticsController', function () {

  // load the controller's module
  beforeEach(module('drawerApp'));

  var StatisticsController,
    scope,
    $httpBackend,
    persons = [{name: 'name', surname: 'surname', draws: [moment()]},
      {name: 'name', surname: 'surname', draws: [moment()]}];

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('/api/person')
      .respond(persons);

    scope = $rootScope.$new();
    StatisticsController = $controller('StatisticsController', {
      $scope: scope
    });
  }));

  it('should attach a list of persons to the scope', function () {
    $httpBackend.flush();
    expect(scope.persons).toEqual(persons);
  });
});
