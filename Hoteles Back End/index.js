'use strict'

require('dotenv').config()
const mongoConfig = require('./configs/mongo');
const app = require('./configs/app');
const { userDefault } = require('./src/user/user.controller');
const { emptyService } = require('./src/AdittionalsHoteles/servicios.controller');
const { addTypeEventDefaul, addTypeEvent } = require('./src/eventType/type.controller');
const { addEventEventDefaul } = require('./src/event/event.controller');
const { addRoomDefault } = require('./src/room/room.controller');

mongoConfig.connect();
app.initServer();
userDefault();
emptyService();
addEventEventDefaul()
addTypeEventDefaul();
addRoomDefault();