'use strict'

const User = require('../user/user.model')
const Room = require('../room/room.model')
const Event = require('../event/event.model')
const Hotel = require('./hotel.model')
const fs = require('fs')
const path = require('path')

exports.addHotel = async(req, res)=>{
    try{
        let data = req.body;
        let existHotel = await Hotel.findOne({name: data.name})
        if(existHotel){
            return res.send({message: 'Hotel alredy created '})
        }
        let hotel = new Hotel(data)
        await hotel.save()
        return res.send({message: 'Hotel saved succesfully'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error creating Hotel'})
    }
}

exports.getHotels = async(req, res)=>{
    try{
        let hotels = await Room.find();
        return res.send({message: 'Hotels Found', hotels})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error getting Hotels'})
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
        let pathFile = './uploads/bedrooms/'
        if(alreadyImage.image) fs.unlinkSync(`${pathFile}${alreadyImage.image}`) 
        if(!req.files.image || !req.files.image.type) return res.status(400).send({message: 'Havent sent image'})
        const filePath = req.files.image.path; 
        const fileSplit = filePath.split('\\') 
        const fileName = fileSplit[2];
        const extension = fileName.split('\.');
        const fileExt = extension[1] 
        console.log(fileExt)
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

exports.addRooms = async(req, res)=>{
    try{
        let hotelId = req.params.id
        let data = req.body;
        let existHotel = await Hotel.findOne({_id: hotelId})
        if(!existHotel) return res.status(404).send({message: 'this hotel does not exist'})
        let Room = existHotel.room;
                //Verificar que no se repitan las habitaciones
                for(let i=0; i<=Room.length; i++){
                    if(Room[i] == data.room) return res.send({message: 'You have already added this product to the cart'});
                }
        let addRoom = await Hotel.findOneAndUpdate(
            {_id: hotelId},
            {$push:{
            room: data.room
            }},
            {new: true}
        )
        return res.send({message: 'Your product has been added', addRoom})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'error adding rooms'})
    }
}

