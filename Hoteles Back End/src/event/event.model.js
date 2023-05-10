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
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    type: {type: mongoose.Schema.Types.ObjectId, ref: 'Type'}

})

module.exports = mongoose.model('Event', eventSchema)

/** */