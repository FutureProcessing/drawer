'use strict';

var _ = require('lodash');

exports.findById = function (SchemaTarget, id, callback) {
  SchemaTarget.findById(id, function (err, document) {
    callback(err, document)
  });
};


exports.findAll = function (SchemaTarget, callback) {
  SchemaTarget.find(function (err, docs) {
    callback(err, docs);
  });
};

exports.save = function (SchemaTarget, doc, callback) {
  SchemaTarget.save(doc, function (err, created) {
    callback(err, created);
  });
};

exports.update = function (SchemaTarget, id, update, callback) {
  SchemaTarget.findById(id, function (err, doc) {
    if (!err) {
      updateDoc(SchemaTarget, update, doc);
      doc.save(function (err) {
        callback(err, doc);
        return;
      });
    } else {
      callback(err);
    }
  })
};

exports.delete = function (SchemaTarget, id, callback) {
  SchemaTarget.findById(id, function (err, doc) {
    if (!err) {
      doc.remove(function (err) {
        callback(err);
      });
    }
  });
};

function updateDoc(SchemaTarget, update, doc) {
  for (var field in SchemaTarget.schema.paths) {
    if ((field !== '_id') && (field !== '__v')) {
      var newValue = getObjValue(field, update);
      if (newValue !== undefined) {
        setObjValue(field, doc, newValue);
      }
    }
  }
}

function getObjValue(field, data) {
  return _.reduce(field.split("."), function (obj, f) {
    if (obj) return obj[f];
  }, data);
}

function setObjValue(field, data, value) {
  var fieldArr = field.split('.');
  return _.reduce(fieldArr, function (o, f, i) {
    if (i === fieldArr.length - 1) {
      o[f] = value;
    } else {
      if (!o[f]) o[f] = {};
    }
    return o[f];
  }, data);
}
