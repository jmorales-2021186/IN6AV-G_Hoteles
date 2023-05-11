'use strict'

const Type = require('../eventType/type.model')
const Event = require('./event.model')

exports.addEvent = async(req, res)=>{
    try{
        let data = req.body;
        let existType = await Type.findOne({_id: data.type})
        if(!existType) return res.status(404).send({message: 'Type Event not found'})
        let duplicateType = await Type.findOne({name: data.name})
        if(!duplicateType){
            return res.send({message: ' Event alredy created'})
        }
        let event = new Event(data)
        await event.save()
        return res.send({message: 'Event saved sucessfully', event})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error creating Event'})
    }
}

exports.getEvents = async(req, res)=>{
    try{
        let events = await Event.find().populate('type')
        return res.send({message: 'Events Found', events})
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

/**aaaaaaaaaaaaaa */
