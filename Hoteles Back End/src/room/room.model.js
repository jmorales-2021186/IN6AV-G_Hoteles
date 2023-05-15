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
        name: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
          type: String,
          required: true
    },
    status:{
        type: Boolean,
        required: true
    },
        versionKey: false
    });

module.exports = mongoose.model('Room', roomSchema)
