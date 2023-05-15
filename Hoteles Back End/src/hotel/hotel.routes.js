'use strict'

const express = require('express')
const api = express.Router()
const hotelController = require('./hotel.controller')
const connectMultiparty = require('connect-multiparty')
const upload = connectMultiparty({uploadDir: './uploads/users'})

// api.put('/uploadImage/:id', upload, roomController.addImage)
// api.get('/getImage/:fileName', upload, roomController.getImage)
api.post('/add', hotelController.addHotel)
api.get('/get', hotelController.getHotels)
api.get('/get/:id', hotelController.getHotel)
api.delete('/delete/:id', hotelController.deleteHotel)
api.put('/addRoom/:id', hotelController.addRooms)

module.exports = api;

/******************** */