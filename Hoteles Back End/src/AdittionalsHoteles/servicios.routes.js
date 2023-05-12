'use strict'

const express = require('express')
const api = express.Router();
const serviciosController = require('./servicios.controller')


api.post('/add', serviciosController.addServices);
api.get('/get', serviciosController.getServices);
api.post('/get/:id', serviciosController.getService);
api.put('/update/:id', serviciosController.update);

module.exports = api;

