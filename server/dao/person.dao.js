'use strict';

var _ = require('lodash');
var dao = require('./dao');
var Person = require('./../model/person.model.js');

exports.findById = function (id, callback) {
  dao.findById(Person, id, callback);
};

exports.findAll = function (callback) {
  dao.findAll(Person, callback);
};

exports.save = function (person, callback) {
  dao.save(Person, person, callback);
};

exports.update = function (id, update, callback) {
  dao.update(Person, id, update, callback);
};

exports.delete = function (id, callback) {
  dao.delete(Person, id, callback);
};
