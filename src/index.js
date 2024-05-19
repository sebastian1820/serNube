const express = require ('express');
const conectarBD = require('../config/db');
const cors = require('cors');


// configuracion puerto produccion
 const port = process.env.Port || 5000;
// creamos nuestro servidor
const app = express();

//enlazar la base datos

conectarBD ();
app.use(cors());

app.use(express.json())
app.use('/api/clientes',require ('../routes/rutas'));
app.use('/api/Proveedor',require ('../routes/rutasProveedor'));
app.use('/api/productos',require ('../routes/rutasproducto'));

app.listen (port,()=>{

    console.log('el servidor esta conectado http://localhost:5000/')
})





/// definir unarutaprincipal

app.get ('/',(req,res) => {
    res.send ("Hola mundo");
})
