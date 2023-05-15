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
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
        image: {
            type: String,
            required: false
    },
    status:{
        type: Boolean,
        required: true
    }
    });

module.exports = mongoose.model('Room', roomSchema)
