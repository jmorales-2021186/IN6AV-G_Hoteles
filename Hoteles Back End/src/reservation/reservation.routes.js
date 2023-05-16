'use strict'

const express = require('express')
const api = express.Router();
const reservationController = require('./reservation.controller')

// api.post('/create', reservationController.createReservation)
// api.get('/get', typeController.getTypes)
// api.get('/get/:id', typeController.getType)
api.delete('/delete/:id', reservationController.deleteReservation)

module.exports = api;

/**aaaaaaaaaaaaaaaaaaaaaaaaaaaa */