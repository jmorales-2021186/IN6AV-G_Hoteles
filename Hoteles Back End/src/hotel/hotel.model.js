//Nombre, direccion, habitacion, administrador, imagen, evento, 
'use strict'

const mongoose = require('mongoose')

const hotelSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    address:{

        type: String,
        required: true
    },

    admin:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},

    event: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],

    image:{
        type: String,
        required: false
       
    },
    description: {
        type: String,
        required: true
    },
    NumReservations:{
        type: Number,
        required: false
    },
    Reservationes:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'Reservation'
    }]
    })

module.exports = mongoose.model('Hotel', hotelSchema)

