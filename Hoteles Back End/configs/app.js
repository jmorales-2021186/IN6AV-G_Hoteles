'use strict'

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
//Puerto
const port = process.env.PORT

//Exportar rutas
const userRoutes = require('../src/user/user.routes');
const roomRoutes = require('../src/room/room.router');
const servicesRoutes = require('../src/AdittionalsHoteles/servicios.routes');
const reservationRoutes = require('../src/reservation/reservation.routes');
const hotelesRoutes = require('../src/hotel/hotel.routes');
const typeRoutes = require('../src/eventType/type.routes');
const eventRoutes = require('../src/event/event.routes');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(helmet());
app.use(cors()); 
app.use(morgan('dev'))

//Utilizar las rutas
app.use('/user', userRoutes);
app.use('/room', roomRoutes);
app.use('/services', servicesRoutes);
app.use('/reser', reservationRoutes);
app.use('/hoteles', hotelesRoutes);
app.use('/type', typeRoutes);
app.use('/event', eventRoutes);

exports.initServer = ()=>{
    app.listen(port);
    console.log(`Server http running in port ${port}`);
}

/* aaaaaaaaaaaasdf*/

