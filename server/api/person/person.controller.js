'use strict';

var personDao = require('./../../dao/person.dao');

exports.findAll = function (req, res) {
  personDao.findAll(function (err, persons) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(200, persons);
  });
};

exports.findById = function (req, res) {
  personDao.findById(req.params.id, function (err, person) {
    if (!person) {
      return res.send(404);
    }
    if (err) {
      return handleError(res, err);
    }
    return res.json(person);
  });
};

exports.save = function (req, res) {
  personDao.save(req.body, function (err, thing) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(201, thing);
  });
};

exports.update = function (req, res) {
  personDao.update(req.params.id, req.body, function (err, person) {
    if (!person) {
      return res.send(404);
    }
    if (err) {
      return handleError(res, err);
    }
    return res.json(200, person);
  });
};

exports.delete = function (req, res) {
  personDao.delete(function (err) {
    if (err) {
      return handleError(res, err);
    }
    return res.send(204);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
