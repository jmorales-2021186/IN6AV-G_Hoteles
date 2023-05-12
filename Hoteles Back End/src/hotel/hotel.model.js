//Nombre, direccion, habitacion, administrador, imagen, evento, 
'use strict'

const mongoose = require('mongoose')

const hotelSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    address:{
<<<<<<< HEAD
        type: String,
        required: true
    },
    room:{type: mongoose.Schema.Types.ObjectId, ref: 'Room'},

    admin:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},

    event: {type: mongoose.Schema.Types.ObjectId, ref: 'Event'},

=======
        type: String, 
        required: true
    },
    
    admin:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    
>>>>>>> msicajan
   image:{
    type: String,
    required: false
   }
})

module.exports = mongoose.model('Hotel', hotelSchema)
<<<<<<< HEAD

/************ */
=======
>>>>>>> msicajan
