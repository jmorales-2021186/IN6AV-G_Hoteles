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
    room:[{type: mongoose.Schema.Types.ObjectId, ref: 'Room'}],

    admin:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},

    event: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
    
    description:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required: false
       }
    })

module.exports = mongoose.model('Hotel', hotelSchema)

