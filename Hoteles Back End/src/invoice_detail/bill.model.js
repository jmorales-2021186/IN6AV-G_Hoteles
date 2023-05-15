'use strict'

const mongoose = require('mongoose')

const billSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    usuairo: 
        {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        required: true
    ,room: 
        {type: mongoose.Schema.Types.ObjectId, ref: 'Room'},
        required: true
    ,
    services: [{
        service:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Servicio',
        }, 
        precio: {
            type: Number
        }
     }],
    total:{
        type: Number,
        required: true
    },
        versionKey: false
    });

module.exports = mongoose.model('bill', billSchema)

/**aaaaaaaaaaaaaaaaaaaaaaaaaaaa*/