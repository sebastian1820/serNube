const mongoose = require('mongoose');
// el model creado aqui debe ser igual al base de datos


const clienteSchema = mongoose.Schema ({

    nombre:{
        type:String,
        required: true
    },
    apellido:{
        type:String,
        required: true
    },
    documento:{
        type:Number,
        required: true
    },
    correo:{
        type:String,
        required: true
    },
    telefono:{
        type:Number,
        required: true
    },
    direccion:{
        type:String,
        required: true
    },
},{versionKey:false})

module.exports= mongoose.model('Cliente',clienteSchema);