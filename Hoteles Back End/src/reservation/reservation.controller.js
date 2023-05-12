'use strict'

const Reservation = require('./reservation.model')
const Room = require('../room/room.model')
const Services = require('../AdittionalsHoteles/servicios.model')
const User = require('../user/user.model')

exports.createReservation = async(req, res)=>{
    try {
        //va treaer los datos del formuralio
        let data = req.body;
        //verificar que el usario existe
        let existUser = await User.findOne({_id: data.user})
        if(!existUser) return res.send({message: 'this user does not exist'})
        //verificar que el rol de usuario solo sera cliente
        if(existUser.role !== 'CLIENT') return res.send({message: 'Register to reserve a room'}) //Si no es rol CLIENTE no puede reservar
        //Verifica que si la habitacion que va a reservar exista
        let existRoom = await Room.findOne({_id: data.room})
        if(!existRoom) return res.send({message: 'this room does not exist'})
        //verifica que los servicion que va adquirir existen
        let existServ = await Services.findOne({_id: data.services})
        if(!existServ) return res.send({message: 'this service does not exist'})      
        //actualiza el status a false al reservar
        let updateRoom = await Room.findOneAndUpdate(
            {_id: existRoom._id},
            {status: false},
            {new: true}
            ) 
        if(!updateRoom) return res.status(404).send({message:'Error al cambiar status'});
        //verificar que si el estado el falso no se pueda reservar
        if(existRoom.status == false) return res.status(404).send({message:'This room cannot be reserved'});
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


exports.getReservations = async(req, res)=>{
    try{
        let rese = await Reservation.find()
        return res.send({message: 'Reservations found', rese})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error getting Reservation'})
    }
}

exports.getReservation = async(req, res)=>{
    try{
        let reseId = req.params.id;
        let rese = await Reservation.findOne({_id: reseId})
        if(!rese) return res.status(404).send({message: 'Reservation not found'})
        return res.send({message: 'Reservation found' , rese})
    }catch(err){
        console.error(err)
        return res.status(500).send({message})
    }
}

exports.deleteReservation = async(req, res)=>{
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