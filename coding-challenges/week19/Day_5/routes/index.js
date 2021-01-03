var express = require('express');
var routes = express.Router();
var controller  = require('../controller/read.controller.js	')

routes.get('/',controller.readAll);

module.exports = routes;	