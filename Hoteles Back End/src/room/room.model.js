'use strict'

const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    capacity: {
<<<<<<< HEAD
        name: Number,
=======
        type: Number,
>>>>>>> jmorales
        required: true
    },
    price: {
        type: String,
        required: true
    },
        image: {
            type: String,
            required: false
    },
    status:{
        type: Boolean,
        required: true
<<<<<<< HEAD
    },
        versionKey: false
=======
    }
>>>>>>> jmorales
    });

module.exports = mongoose.model('Room', roomSchema)
