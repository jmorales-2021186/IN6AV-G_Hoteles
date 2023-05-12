'use strict'

const Servicios = require('./servicios.model')

exports.emptyService = async(req, res)=>{
    try{
      
        let data = {
            name: 'Ninguno',
            description: 'Ninguno',
            price: 0
        }
        let service = new Servicios(data)
        let existSer = await Servicios.findOne({name: data.name})
        if(!existSer) await service.save()
    }catch(err){
        console.log(err)
    }
}

exports.addServices = async(req, res)=>{
    try{
        let data = req.body;
        let existSer = await Servicios.findOne({name: data.name})
        if(existSer){
            return res.send({message: 'this service already exists'})
        }
        let service = new Servicios(data)
        await service.save()
        return res.send({mmesage: 'Service saved succesfully'})
    }catch(err){
        console.log(err)
        return res.status(500).send({message: 'Error creating Services'})
    }
}

exports.getServices = async(req, res)=>{
    try{
        let servicios = await Servicios.find()
        return res.send({message: 'Services found', servicios})
    }catch(err){
        console.log(err)
        return res.status(500).send({message: 'Error getting Services'})
    }
}

exports.getService = async(req, res)=>{
    try{
        let servicioId = req.params.id
        let servicio = await Servicios.findOne({_id: servicioId})
        if(!servicio) return res.status(404).send({message: 'Service not found'})
        return res.send({message: 'Service found', servicio})
    }catch(err){
        console.log(err)
        return res.status(500).send({message: 'Error getting SErvices'})
    }
}

exports.update = async(req, res)=>{
    try{
        let serviceId = req.params.id;
        let data = req.body;
       
        let updateService = await Servicio.findOneAndUpdate(
            {_id: serviceId},
            data,
            {new: true}
        )
        if(!updateService) return res.status(404).send({message: "service not found, not updated"});
        return res.send({message: 'Service updatedd', updateService})
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error getting Service'})
    }
}
/**/