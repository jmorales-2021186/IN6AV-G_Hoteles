'use strict'

const User = require('./user.model');
const { validateData, encrypt, checkPassword } = require('../utils/validate');
const { createToken } = require('../services/jwt');


exports.test = (req, res)=>{
    res.send({message: 'Test function is running'});
}

//Usuario Admin Por defecto
exports.userDefault = async()=>{
    try{
        let data = {
            name: 'admin',
            surname: '418',
            username: 'admin',
            password: 'admin',
            email: 'admin@gmail.com',
            phone: '12345678',
            role: 'ADMIN'
        }
        data.password = await encrypt(data.password)
        let existDefault = await User.findOne({name: data.name});
        let addDefault;
        (existDefault) 
         ? ( console.log(`Admin ${data.name} creado por default`) )
         :  (addDefault = new User(data),
            await addDefault.save(),
            console.log('Usuario ADMIN creado por Default'))


    }catch(e){
        console.error(e);
        return res.status(500).send({message: 'Error server'})
    }
}

//Registro Unicamente para Cliente se le agrega rol CLIENT por defecto no se puede cambiar
exports.register = async(req, res)=>{
    try{
        //Capturar el fomulario de registro (Body)
        let data = req.body;
        let params = {
            password: data.password,
        }
        let validate = validateData(params);
        if(validate) return res.status(400).send(validate);
        //Role predefinido
        data.role = 'CLIENT';
        //Encriptar contraseña
        data.password = await encrypt(data.password)
        //Guardar la información
        let user = new User(data);
        await user.save();
        return res.send({message: 'Account created sucessfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error creating account', error: err.message})
    }
}

//Registro Unicamente para un ADMINISTRADOR DE UN HOTEL con rol ADMIN_HOTEL por defecto no se puede cambiar
exports.save = async(req, res)=>{
    try{
        //Capturar el fomulario de registro (Body)
        let data = req.body;
        let params = {
            password: data.password,
        }
        let validate = validateData(params);
        if(validate) return res.status(400).send(validate);
        //Role predefinido
        data.role = 'ADMIN_HOTEL';
        //Encriptar contraseña
        data.password = await encrypt(data.password)
        //Guardar la información
        let user = new User(data);
        await user.save();
        return res.send({message: 'Account created sucessfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error creating account', error: err.message})
    }
}

exports.login = async(req, res)=>{
    try{
        //Obtener la data a validar (username y password)
        let data = req.body;
        let credentials = { //Los datos obligatorios que va a validar la función validateData
            username: data.username,
            password: data.password
        }
        let msg = validateData(credentials);
        if(msg) return res.status(400).send(msg)
        //validar que exista en la BD
        let user = await User.findOne({username: data.username});
        //Validar la contraseña
        if(user && await checkPassword(data.password, user.password)) {

            let token = await createToken(user)
            let userLogged = {
                username: user.username,
                name: user.name
            }
            return res.send({message: 'User logged sucessfully', token, userLogged, });
        }
        return res.status(401).send({message: 'Invalid credentials'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error, not logged'});
    }
}



exports.update = async(req, res)=>{
    try {
        let data = req.body;
        let userId = req.params.id;
        //Validar que le llegue data a actualizar
        if(data.password || Object.entries(data).length === 0 || data.role) return res.status(400).send({message: 'Have submitted some data that cannot be updated'});
        let updateUser = await User.findOneAndUpdate(
            {_id: userId},
            data,
            {new: true}
        ).lean()
        if(!updateUser) return res.status(404).send({message:'User not found'});
        return res.send({message: 'User updated succesfully', updateUser});
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error updating User'});
    }
}

exports.delete = async(req, res)=>{
    try{
        //Obtener el id a eliminar
        let userId = req.params.id;
        //Eliminar
        let userDeleted = await User.findOneAndDelete({_id: userId});
        if(!userDeleted) return res.send({message: 'Account not found and not deleted'});
        return res.send({message: `Account with username ${userDeleted.username} deleted sucessfully`});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error not deleted'});
    }
}


