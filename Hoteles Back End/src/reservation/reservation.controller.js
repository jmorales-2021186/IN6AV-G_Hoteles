'use strict'

const Reservation = require('./reservation.model')
const Room = require('../room/room.model')
const Services = require('../AdittionalsHoteles/servicios.model')
const User = require('../user/user.model')


exports.createReservationDafault = async(req, res)=>{
    try {
        let userDefault = await User.findOne({name: '------'})
       
        let existRoom = await Room.findOne({name: 'Default'})
       
        let existServ = await Services.findOne({name: 'Ninguno'})
        
        let data = {
            user: userDefault._id,
            room: existRoom._id,
            Services: existServ._id,
            total: 0,
            starDtate: Date.now(),
            endingDate: Date.now()
        }
        

        //Guardar Reser
        data.total = 0;
        let reservation = new Reservation(data)
        let existSer = await Reservation.findOne({room: existRoom._id})
        if(!existSer) await reservation.save()
        
    }
     catch (err) { 
        console.error(err)
       
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

exports.deleteReservation = async(req, res)=>{ //Esta funcion Cancela la reservacion del usuario
    try{
        let reservationId = req.params.id
        let existeReservation = await Reservation.findOne({_id: reservationId})
        let existRoom = await Room.findOne({_id: existeReservation.room})
        if(existeReservation.room == existRoom._id) return res.send({message: 'this room does not exist'})
        let updateRoom = await Room.findOneAndUpdate(
            {_id: existRoom._id},
            {status: true},
            {new: true}
            ) 
        if(!updateRoom) return res.status(404).send({message:'Error al cambiar status'});
        let deleteReservation = await Reservation.findOneAndDelete({_id: reservationId})
        if(!deleteReservation) return res.send({message: 'this reservation could not be deleted'});
        return res.send({message: `canceled reservation`});
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting Reservation'})
    }
}

