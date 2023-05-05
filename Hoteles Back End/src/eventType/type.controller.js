'use strict'

const Type = require('./type.model')
const { validateData, cheackUpdate} = require('../utils/validate')

exports.addTypeEvent = async(req, res)=>{
    try{
        let data = req.body;
        let existType = await Type.findOne({name: data.name})
        if(existType){
            return res.send({message: 'Event Type alredy created'})
        }
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

exports.updaTE = async(req, res)=>{
    try {
     let typeId = req.params.id
     let data = req.body
     let existType = await Type.findOne({name: data.name}).lean()
     if(existType){
        if(existType._id != typeId) return res.send({message: 'Type Event alredy created'})
        let updatedEVent = await Type.findOneAndUpdate(
            {_id: typeId},
            data,
            {new: true}
        )
        if(updatedEVent) return res.status(404).send({message: 'Type Event not found and not updated'})
        return res.send({message: 'Type Event updated' , updatedEVent})
     }   
     let updatedEVent = await Type.findOneAndUpdate(
        {_id: typeId},
        data,
        {new: true}
     )
     if(!updatedEVent) return res.status(404).send({message: 'Type Event not found and not updaded'})
     return res.send({message: ' Type Event updaded', updatedEVent})

    } catch (err) {
            console.error(err)
            return res.status(500).send({message: 'Error Updating Type Event'})
    }
}