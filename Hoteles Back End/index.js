'use strict'

require('dotenv').config()
const mongoConfig = require('./configs/mongo');
const app = require('./configs/app');
const { userDefault } = require('./src/user/user.controller');
const { emptyService } = require('./src/AdittionalsHoteles/servicios.controller');

mongoConfig.connect();
app.initServer();
userDefault();
emptyService();
