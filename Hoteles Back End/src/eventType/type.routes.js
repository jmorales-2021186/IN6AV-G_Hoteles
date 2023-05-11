'use strict'

const express = require('express')
const api = express.Router();
const typeController = require('./type.controller')

api.post('/add', typeController.addTypeEvent)
api.get('/get', typeController.getTypes)
api.get('/get/:id', typeController.getType)
api.delete('/delete/:id', typeController.deleteTypE)

module.exports = api;

/*aaaaaaaaaaaaaaaaaaaaaaaaaaaa* */