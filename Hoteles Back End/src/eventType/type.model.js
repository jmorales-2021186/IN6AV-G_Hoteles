<<<<<<< HEAD
// type, name, description
=======

>>>>>>> msicajan
'use strict'

const mongoose = require('mongoose')

const typeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Type', typeSchema)



<<<<<<< HEAD
<<<<<<< HEAD
/** */
=======
/** aaaaaaaaaaaaaaaa*/
>>>>>>> jmorales
=======
>>>>>>> msicajan
