'use strict';

describe('Controller: DrawingController', function () {

  // load the controller's module
  beforeEach(module('drawerApp'));

  var DrawingController,
    scope,
    $httpBackend,
    config = {data: 'data'},
    persons = [{name: 'name', surname: 'surname', draws: [moment()]},
      {name: 'name', surname: 'surname', draws: [moment()]}];

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/config')
      .respond(config);
    $httpBackend.expectGET('/api/person')
      .respond(persons);

    scope = $rootScope.$new();
    DrawingController = $controller('DrawingController', {
      $scope: scope
    });
  }));

  it('should attach a list of persons to the scope', function () {
    $httpBackend.flush();
    expect(scope.persons).toEqual(persons);
  });

  it('should attach a config to the scope', function () {
    $httpBackend.flush();
    expect(scope.config).toEqual(config);
  });
});
