'use strict'

const Type = require('../eventType/type.model')
const Event = require('./event.model')
const Hotel = require('../hotel/hotel.model')

exports.addEventEventDefaul = async(req, res)=>{
    try{
        let typeId = await Type.findOne({name: 'Ninguno'})
        let data = {
            name: 'Ninguno',
            date: new Date(),
            price: 0,
            type: typeId._id,
        }
        let event = new Event(data)
        let existSer = await Event.findOne({name: data.name})
        if(!existSer) await event.save()
    }catch(err){
        console.log(err)
    }
}


exports.addEvents = async(req, res)=>{
    try{
        //ID DEL ADMIN HOTEL
        let userId = req.params.id
        //VA A IR A BUSCAR EL ID QUE TENGA ESE HOTEL
        let hotel = await Hotel.findOne({admin: userId})
        if(!hotel) return res.status(500).send({message: 'Hotel not Found '})
        //Crear la habitacion
        let data = req.body;
        console.log('1')
        let existEvent = await Event.findOne({name: data.name})
        console.log('2')
        if(existEvent){
            return res.send({message: 'Event alredy created'})
        }
        let existTypeEvent = await Type.findOne({_id: data.type})
        if (!existTypeEvent) return res.send({ message: 'this type Event does not exist' })
        console.log(existTypeEvent)
        if (existTypeEvent.name == 'Ninguno') return res.send({ message: 'this type Event is not possible to book' })
        console.log('3')
        let eventAgregate = new Event(data)
        await eventAgregate.save()
       // AGREGAR LA HABITCION AL HOTEL
        let addEvent = await Hotel.findOneAndUpdate(
            {_id: hotel._id},
            {$push:{
            event: eventAgregate._id
            }},
            {new: true}
        )
        return res.send({message: 'Event saved succesfully', addEvent})
     }catch(err){
        console.error(err)
        return res.status(500).send({message: 'error adding events'})
    }
}


exports.getEvents = async(req, res)=>{
    try{
        let events = await Event.find().populate('type')
        return res.send({events})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error getting Events'})
    }
}

exports.getEvent = async(req, res)=>{
    try{
        let eventId = req.params.id
        let event = await Event.findOne({_id: eventId}).populate('type')
        if(!event) return res.status(404).send({message: 'Event not found '})
        return res.send({message: 'Event found ', event})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error getting EVENT'})
    }
}


exports.updateEvent = async(req, res)=>{
    try {
        let eventId = req.params.id
        let data = req.body
        let existType = await Type.findOne({_id: data.type})
        if(existType) return res.status(404).send({message: 'Event Type not found'})
        let updatE = await Event.findOneAndUpdate(
            {_id: eventId},
            data,
            {new: true}
        )
        if(!updatE) return res.send({message: 'Event not found and not updated'})
        return res.send({message: 'Event  updated:', updatE})   
    } catch (err) {
            console.error(err)
            return res.status(500).send({message: 'Error updating Event'})
    }
}

exports.delete = async(req, res)=>{
    try{
        let eventId = req.params.id
        let deletEvent = await Event.findOneAndDelete({_id: eventId})
        if(!deletEvent) return res.status(404).send({message: 'Error removing Event'})
        return res.send({message: 'event deleted succesfully', deletEvent})
    }catch(err){
        console.error(err)
    }
}

