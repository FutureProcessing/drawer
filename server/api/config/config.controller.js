'use strict';

var configDao = require('./../../dao/config.dao');

exports.find = function (req, res) {
  configDao.findAll(function (err, configs) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(200, configs[0]);
  });
};

exports.update = function (req, res) {
  configDao.update(req.params.id, req.body, function (err, config) {
    if (!config) {
      return res.send(404);
    }
    if (err) {
      return handleError(res, err);
    }
    return res.json(200, config);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
