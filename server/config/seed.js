/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Person = require('../model/person.model.js');
var Config = require('../model/config.model.js');

Person.find(function (err, persons) {
  if (persons.length === 0) {
    Person.find({}).remove(function () {
      Person.create({
        name: 'Daniel',
        surname: 'Czyż'
      }, {
        name: 'Paweł',
        surname: 'Benecki'
      }, {
        name: 'Łukasz',
        surname: 'Kulig'
      }, {
        name: 'Daniel',
        surname: 'Kostrzewa'
      }, {
        name: 'Arkadiusz',
        surname: 'Kawka'
      }, {
        name: 'Magdalena',
        surname: 'Iwanow'
      }, {
        name: 'Michał',
        surname: 'Wojtasiewicz'
      });
    });
  }

  Config.find(function (err, config) {
    if (config.length === 0) {
      Config.find({}).remove(function () {
        Config.create({
          drawOnce: false
        });
      });
    }
  });
});
