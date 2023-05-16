'use strict'

const Reservation = require('./reservation.model')
const Room = require('../room/room.model')
const Services = require('../AdittionalsHoteles/servicios.model')
const User = require('../user/user.model')


// exports.createReservation = async(req, res)=>{
//     try {
//         //va treaer los datos del formuralio
//         let data = req.body;
//         //verificar que el usario existe
//         let existUser = await User.findOne({_id: data.user})
//         if(!existUser) return res.send({message: 'this user does not exist'})
//         //verificar que el rol de usuario solo sera cliente
//         if(existUser.role !== 'CLIENT') return res.send({message: 'Register to reserve a room'}) //Si no es rol CLIENTE no puede reservar
//         //Verifica que si la habitacion que va a reservar exista
//         let existRoom = await Room.findOne({_id: data.room})
//         if(!existRoom) return res.send({message: 'this room does not exist'})
//         if(existRoom.name == 'Default') return res.send({message: 'this room is not possible to book'})      
//         //verifica que los servicion que va adquirir existen
//         let existServ = await Services.findOne({_id: data.services})
//         if(!existServ) return res.send({message: 'this service does not exist'})  
//         //Verificar que la fecha que sea de fin no sea menor a la de inicio de la reservacion

//         if(data.endingDate <= data.starDtate) return res.send({message: 'la fecha de al finalizar el hospedaje no puede ser menor a la de inicio'}) 
//         //actualiza el status a false al reservar
//         let updateRoom = await Room.findOneAndUpdate(
//             {_id: existRoom._id},
//             {status: false},
//             {new: true}
//             ) 
//         if(!updateRoom) return res.status(404).send({message:'Error al cambiar status'});
//         //verificar que si el estado el falso no se pueda reservar
//         if(existRoom.status == false) return res.status(404).send({message:'This room cannot be reserved'});
//         //Guardar Reser
//         data.total = 0;
//         let reservation = new Reservation(data)
//         await reservation.save()
//         return res.send({mmesage: 'Reservation saved succesfully'})
//     }
//      catch (err) { 
//         console.error(err)
//         return res.status(500).send({message: 'Error creating Room'})
//     }
// }


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

