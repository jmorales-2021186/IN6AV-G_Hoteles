'use strict'

const express = require('express');
const api = express.Router();
const userController = require('./user.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated');


//Rutas públicas
//Para cliente Unicamente y luego login para todos
api.post('/register', userController.register);
api.post('/login', userController.login);

//Rutas solo de Admin
api.put('/update/:id', userController.update);
api.delete('/delete/:id', userController.delete);

//Rutas privadas solo para administrador
//Funcion del ADMIN para crear un administrador de un hotel
api.post('/save', [ ensureAuth, isAdmin ], userController.save);

module.exports = api;