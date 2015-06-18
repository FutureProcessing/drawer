'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ConfigSchema = new Schema({
  drawOnce: Boolean
});

module.exports = mongoose.model('Config', ConfigSchema);
