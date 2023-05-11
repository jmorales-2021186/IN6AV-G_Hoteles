'use strict'

const Reservation = require('./reservation.model')
const Room = require('../room/room.model')
const Services = require('../AdittionalsHoteles/servicios.model')

exports.createReservation = async(req, res)=>{
    try {
        //va treaer los datos del formuralio
        let data = req.body;
        //Verifica que si la habitacion que va a reservar exista
        let existRoom = await Room.findOne({_id: data.room})
        if(!existRoom) return res.send({message: 'this room does not exist'})
        //verifica que los servicion que va adquirir existen
        let existServ = await Services.findOne({_id: data.services})
        if(!existServ) return res.send({message: 'this service does not exist'})
        
        
        //Guardar Reser
        let reservation = new Reservation(data)
        await reservation.save()
        return res.send({mmesage: 'Reservation saved succesfully'})
    }
     catch (err) { 
        console.error(err)
        return res.status(500).send({message: 'Error creating Room'})
    }
}


exports.getTypes = async(req, res)=>{
    try{
        let types = await Type.find()
        return res.send({message: 'Types found', types})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error getting Types'})
    }
}

exports.getType = async(req, res)=>{
    try{
        let typeId = req.params.id;
        let type = await Type.findOne({_id: typeId})
        if(!type) return res.status(404).send({message: 'Event Type not found'})
        return res.send({message: 'Event type found' , type})
    }catch(err){
        console.error(err)
        return res.status(500).send({message})
    }
}

exports.deleteTypE = async(req, res)=>{
    try{
        let typeId = req.params.id
        let deleteType = await Type.findOneAndDelete({_id: typeId})
        if(!deleteType) return res.status(404).send({message: ' event deleted successfully', deleteType})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting Event Type'})
    }
}

/** aaaaaaaaaaaaaaaaaaaa*/