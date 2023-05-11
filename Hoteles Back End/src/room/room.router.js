'use strict'

const express = require('express')
const api = express.Router()
const roomController = require('./room.controller')
const connectMultiparty = require('connect-multiparty')
const upload = connectMultiparty({uploadDir: './uploads/users'})

api.post('/add', roomController.addRoom)
api.get('/get', roomController.getRooms)
api.get('/get/:id', roomController.getRooms)
api.put('/uploadImage/:id', upload, roomController.addImage)
api.get('/getImage/:fileName', upload, roomController.getImage)
api.delete('/delete/:id', roomController.deleteRoom)
module.exports = api;

/*asdfasdfasdfasdf* */
