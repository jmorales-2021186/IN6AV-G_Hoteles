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
<<<<<<< HEAD
        name: Number,
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
    },
        versionKey: false
    });

module.exports = mongoose.model('Room', roomSchema)

/** */
=======
=======
>>>>>>> msicajan
        type: String,
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
    status: {
        type: Boolean,
        required: true
    }
},{
    versionKey: false
});

module.exports = mongoose.model('Room', roomSchema)

/********** */
<<<<<<< HEAD
>>>>>>> jmorales
=======
>>>>>>> msicajan
