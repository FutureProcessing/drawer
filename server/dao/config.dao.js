'use strict';

var _ = require('lodash');
var dao = require('./dao');
var Config = require('./../model/config.model.js');

exports.findAll = function (callback) {
  dao.findAll(Config, callback);
};

exports.update = function (id, update, callback) {
  dao.update(Config, id, update, callback);
};
