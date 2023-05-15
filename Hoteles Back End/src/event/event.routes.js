'use strict'

const express = require('express')
const api = express.Router();
const eventController = require('./event.controller')

api.post('/add', eventController.addEvent)

module.exports = api

