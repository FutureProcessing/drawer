'use strict';

describe('Service: ConfigService', function () {

  beforeEach(module('drawerApp'));

  var ConfigService,
    $httpBackend,
    config = {_id: 1, data: 'data'};

  beforeEach(inject(function (_$httpBackend_, _ConfigService_) {
    $httpBackend = _$httpBackend_;
    ConfigService = _ConfigService_;
  }));

  it('should get config', function () {
    $httpBackend.expectGET('/api/config').respond(config);
    var response = {};

    ConfigService.getConfig().then(function (res) {
      response = res;
    });

    $httpBackend.flush();
    expect(response.data).toEqual(config);
  });

  it('should update config', function () {
    var response = {};

    $httpBackend.expectPATCH('/api/config/' + config._id, config).respond(config);
    ConfigService.updateConfig(config).then(function (config) {
      response = config;
    });
    $httpBackend.flush();
    expect(response.data).toEqual(config);
  });

});
