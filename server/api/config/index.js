'use strict';

var express = require('express');
var controller = require('./config.controller');

var router = express.Router();

router.get('/', controller.find);
router.patch('/:id', controller.update);

module.exports = router;
