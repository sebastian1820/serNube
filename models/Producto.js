const mongoose = require('mongoose');
// el model creado aqui debe ser igual al base de datos


const productoSchema = mongoose.Schema ({

    marca:{
        type:String,
        required: true
    },
    modelo:{
        type:String,
        required: true
    },
    fecha:{
        type:String,
        required: true
    },
    color:{
        type:String,
        required: true
    },
    sistema:{
        type:String,
        required: true
    },

},{versionKey:false})

module.exports= mongoose.model('Producto',productoSchema);