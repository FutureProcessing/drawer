'use strict';

var express = require('express');
var controller = require('./person.controller');

var router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.post('/', controller.save);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
