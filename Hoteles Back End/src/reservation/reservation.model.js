'use strict'

const mongoose = require('mongoose')

const reservationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    room: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Room'
    },
    services: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Servicio'
    },
    total: {
        type: Number,
        required: true
    },
    days:{
        type:Number,
        required: true
    }
})

module.exports = mongoose.model('Reservation', reservationSchema)



/**aaaaaaaaaaaaaaaaaaaa */