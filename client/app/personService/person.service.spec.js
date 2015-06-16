'use strict';

describe('Service: PersonService', function () {

  beforeEach(module('drawerApp'));

  var PersonService,
    $httpBackend,
    persons = [{name: 'name', surname: 'surname', draws: [moment()]},
      {name: 'name', surname: 'surname', draws: [moment()]}];

  beforeEach(inject(function (_$httpBackend_, _PersonService_) {
    $httpBackend = _$httpBackend_;
    PersonService = _PersonService_;
  }));

  it('should return list of persons', function () {
    $httpBackend.expectGET('/api/person').respond(persons);
    var response = {};

    PersonService.getPersons().then(function (res) {
      response = res;
    });

    $httpBackend.flush();
    expect(response.data).toEqual(persons);
  });

  it('should update person', function () {
    var person = {_id: 1, name: 'name', surname: 'surname'};
    var response = {};

    $httpBackend.expectPATCH('/api/person/' + person._id, person).respond(person);
    PersonService.updatePerson(person).then(function (person) {
      response = person;
    });
    $httpBackend.flush();
    expect(response.data).toEqual(person);
  });
});
