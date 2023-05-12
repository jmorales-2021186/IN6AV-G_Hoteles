//fecha, nombre, hotel, tipo de evento
'use strict'

const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
<<<<<<< HEAD
<<<<<<< HEAD
        required: true
=======
        required: false
>>>>>>> jmorales
=======
        required: true
>>>>>>> msicajan
    },
    price:{
        type: Number,
        required: true
    },
    type: {type: mongoose.Schema.Types.ObjectId, ref: 'Type'}

})

module.exports = mongoose.model('Event', eventSchema)

<<<<<<< HEAD
<<<<<<< HEAD
/** */
=======
/*aaaaaaaaaaaaaaa */
>>>>>>> jmorales
=======
>>>>>>> msicajan
