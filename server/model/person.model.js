'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PersonSchema = new Schema({
  name: String,
  surname: String,
  participate: {type: Boolean, default: true},
  draws: [Date]
});

module.exports = mongoose.model('Person', PersonSchema);
