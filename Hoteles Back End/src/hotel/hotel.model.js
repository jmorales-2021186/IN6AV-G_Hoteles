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
    
   image:{
    type: String,
    required: false
   }
})

module.exports = mongoose.model('Hotel', hotelSchema)
