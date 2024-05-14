const mongoose = require('mongoose');
require('dotenv').config()

// conexion mongo DB
const conectarBD = () => {

    mongoose
    .connect(process.env.DB_MONGO)
    .then (()=> console.log('estamos conectamos con mongo')) 
    .catch((err)=> console.error(err));
}

module .exports = conectarBD ;