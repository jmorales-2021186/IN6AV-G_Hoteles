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
<<<<<<< HEAD
    services: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Servicio'
    },
=======
    services: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Servicio'
    }],
>>>>>>> msicajan
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



<<<<<<< HEAD
/**aaaaaaaaaaaaaaaaaaaa */
=======
>>>>>>> msicajan
