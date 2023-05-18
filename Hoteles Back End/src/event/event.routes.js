'use strict'

const express = require('express')
const api = express.Router();
const eventController = require('./event.controller')

api.put('/addEvents/:id', eventController.addEvents)
module.exports = api

