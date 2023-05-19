'use strict'

const express = require('express')
const api = express.Router();
const eventController = require('./event.controller')

api.post('/addEvents/:id', eventController.addEvents)
api.get('/get', eventController.getEvents)
api.delete('/delete/:id', eventController.delete)
module.exports = api

