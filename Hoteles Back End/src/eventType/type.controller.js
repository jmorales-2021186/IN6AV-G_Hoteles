'use strict'

const Type = require('./type.model')

exports.addTypeEventDefaul = async(req, res)=>{
    try{
      
        let data = {
            name: 'Ninguno',
            description: 'Ninguno',
        }
        let type = new Type(data)
        let existSer = await Type.findOne({name: data.name})
        if(!existSer) await type.save()
    }catch(err){
        console.log(err)
    }
}

exports.addTypeEvent = async(req, res)=>{
    try{
        let data = req.body;
        let type = new Type(data)
        await type.save()
        return res.send({message: 'Event Type saved successfully'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error creating Event Type'})
    }
}

exports.getTypes = async(req, res)=>{
    try{
        let types = await Type.find()
        return res.send({types})
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

