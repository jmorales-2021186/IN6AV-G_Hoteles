'use strict'

const Room = require('./room.model')
const fs = require('fs')
const path = require('path')


exports.addRoom = async(req, res)=>{
    try {
        let data = req.body;
        let existRoom = await Room.findOne({name: data.name})
        if(existRoom){
            return res.send({message: 'Room alredy created'})
        }
        let room = new Room(data)
        await room.save()
        return res.send({mmesage: 'Room saved succesfully'})
    }
     catch (err) { 
        console.error(err)
        return res.status(500).send({message: 'Error creating Room'})
    }
}

exports.getRooms = async (req, res)=>{
    try {
        let rooms = await Room.find()
        return res.send({message: 'Rooms Found', rooms})
    } catch (err) {
            console.error(err)
            return res.status(500).send({message: 'Eroror getting Rooms'})
    }
}

exports.getRoom = async(req, res)=>{
    try{
        let roomId = req.params.id
        let room = await Room.findOne({_id: roomId})
        if(!room) return res.status(500).send({message:'this room does not exist'})
        return res.send({mmesage: 'get room', room})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error getting '})
    }
}

exports.deleteRoom = async(req, res)=>{
    try{
        let roomId = req.params.id
        let deleteRoom = await Room.findOneAndDelete({_id: roomId})
        if(!deleteRoom) return res.status(404).send({message: 'Room deleted successfully'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error delet '})
    }
}

exports.addImage = async(req, res)=>{
    try{
        const roomId = req.params.id; 
        const alreadyImage = await Room.findOne({_id: roomId})
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
            const updatedRoomImage = await Room.findOneAndUpdate(
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

/**aaa */