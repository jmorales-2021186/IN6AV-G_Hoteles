'use strict'

const User = require('../user/user.model')
const Room = require('../room/room.model')
const Event = require('../event/event.model')
const Hotel = require('./hotel.model')
const fs = require('fs')
const path = require('path')
const reservationModel = require('../reservation/reservation.model')

exports.addHotel = async(req, res)=>{
    try{
        let data = req.body;
        let existHotel = await Hotel.findOne({name: data.name})
        if(existHotel){
            return res.send({message: 'Hotel alredy created '})
            
        }
        let checkAdminHotel = await User.findOne({_id: data.admin})
        if(checkAdminHotel.role !== 'ADMIN_HOTEL') return res.send({message: 'Can not add this user'})
        //verificar que es admin no tanga ya un hotel asignado
        let adminHotel = await Hotel.findOne({admin: data.admin})
        if(adminHotel) return res.send({message: 'Debes agregar un administrador que no tenga ya un hotel'})
        let AddRoomDafault = await Room.findOne({name: 'Default'})
        data.room = AddRoomDafault._id;
        let AddEventDafault = await Event.findOne({name: 'Ninguno'})
        data.event = AddEventDafault._id;
        data.NumReservations = 0;
        //Mandarle la reservacion por defecto 
        let reservationDef = await User.findOne({name: '------'})
        let reser = await reservationModel.findOne({user: reservationDef._id})
        console.log(reser._id)
        data.Reservationes = reser._id
        let hotel = new Hotel(data)
        await hotel.save()
        return res.send({message: 'Hotel saved succesfully'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error creating Hotel'})
    }
}

//Puede ver los eventos de un hotel en especifico



exports.getHotels = async(req, res)=>{
    try{
        let hotels = await Hotel.find();
        return res.send({message: 'Hotels Found', hotels})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error getting Hotels'})
    }
}

//Obtener Hotel por admin
exports.getAdminHotel = async(req, res)=>{
    try{
        let id = req.params.id
        let existHotel = await Hotel.findOne({admin: id})
        if(!existHotel) return res.status(403).send({message: 'Nos e encuentra'})
        return res.send({existHotel})
    }catch(e){
        return res.status(500).send({message: 'Error Server'})
    }
}

//Puede visualizar las habitaciones por hotel.

exports.getEventInHotel = async(req, res)=>{
    try{
        let hotelId = req.params.id
        let hotel = await Hotel.findOne({_id: hotelId})
        if(!hotel) return res.status(500).send({message: 'Hotel not Found '})
        let events = hotel.event;
        for (let i = 0; i <= events.length; i++) {
            return res.send({message: `Los eventos son: ${events}`})
        }
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error getting Hotel'})
    }
}


exports.getHotel = async(req, res)=>{
    try{
        let hotelId = req.parms.id
        let hotel = await Hotel.findOne({_id: hotelId})
        if(!hotel) return res.status(500).send({message: 'Hotel not Found '})
        return res.send({message: 'Hotel Found ', hotel})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error getting Hotel'})
    }
}



exports.addImage = async(req, res)=>{
    try{
        const roomId = req.params.id; 
        const alreadyImage = await Hotel.findOne({_id: roomId})
        console.log('1');
        let pathFile = './uploads/hoteles/'
        console.log('2');
        if(alreadyImage.image) fs.unlinkSync(`${pathFile}${alreadyImage.image}`) 
        console.log('3');
        if(!req.files.image || !req.files.image.type) return res.status(400).send({message: 'Havent sent image'})
        console.log('4');
        const filePath = req.files.image.path; 
        const fileSplit = filePath.split('\\') 
        const fileName = fileSplit[2];
        const extension = fileName.split('\.');
        const fileExt = extension[1] 
        console.log(fileExt)
        console.log('2');
        if(
            fileExt == 'png' || 
            fileExt == 'jpg' || 
            fileExt == 'jpeg' || 
            fileExt == 'gif'
        ){
            const updatedRoomImage = await Hotel.findOneAndUpdate(
                {_id: roomId}, 
                {image: fileName}, 
                {new: true}
            )
            if(!updatedRoomImage) return res.status(404).send({message: 'Room not found and not updated'});
            return res.send({message: 'User updated', updatedRoomImage})
        }
        fs.unlinkSync(filePath)
        return res.status(404).send({message: 'File extension cannot admited'});
        

    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error adding image', err})
    }
}

exports.getImage = async(req, res)=>{
    try{
        const fileName = req.params.fileName;
        const pathFile = `./uploads/bedrooms/${fileName}`

        const image = fs.existsSync(pathFile);
        if(!image) return res.status(404).send({message: 'image not found'})
        return res.sendFile(path.resolve(pathFile))
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting image'});
    }
}

exports.deleteHotel = async(req, res)=>{
    try{
        let hotelId = req.params.id
        let deleteHotel = await Hotel.findOneAndDelete({_id: hotelId})
        if(!deleteHotel) return res.status(404).send({message: 'Hotel deleted succesfully'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting Hotel'})
    }
}




