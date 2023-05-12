'use strict'

require('dotenv').config()
const mongoConfig = require('./configs/mongo');
const app = require('./configs/app');
const { userDefault } = require('./src/user/user.controller');
<<<<<<< HEAD
=======
const { emptyService } = require('./src/AdittionalsHoteles/servicios.controller');
>>>>>>> msicajan

mongoConfig.connect();
app.initServer();
userDefault();
<<<<<<< HEAD

<<<<<<< HEAD
/** */
=======
/*asdfasfasdfa */
>>>>>>> jmorales
=======
emptyService();

/** */
/*asdfasfasdfa */
>>>>>>> msicajan
