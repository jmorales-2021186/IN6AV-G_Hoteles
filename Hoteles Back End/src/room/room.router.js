'use strict'

const express = require('express')
const api = express.Router()
const roomController = require('./room.controller')
const connectMultiparty = require('connect-multiparty')
const upload = connectMultiparty({uploadDir: './uploads/users'})

api.post('/add', roomController.addRoom)
<<<<<<< HEAD
<<<<<<< HEAD
api.get('/get', roomController.getTypes)
api.get('/get/:id', roomController.getType)
=======
api.get('/get', roomController.getRooms)
api.get('/get/:id', roomController.getRooms)
>>>>>>> jmorales
=======
api.get('/get', roomController.getRooms)
api.get('/get/:id', roomController.getRooms)
>>>>>>> msicajan
api.put('/uploadImage/:id', upload, roomController.addImage)
api.get('/getImage/:fileName', upload, roomController.getImage)
api.delete('/delete/:id', roomController.deleteRoom)
module.exports = api;

<<<<<<< HEAD
<<<<<<< HEAD
/** */
=======
/*asdfasdfasdfasdf* */
>>>>>>> jmorales
=======

>>>>>>> msicajan
