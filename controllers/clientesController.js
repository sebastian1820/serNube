const Cliente = require('../models/Cliente');

//funcion todos los buscar cliente
exports.buscarClientes = async(req,res)=>{
 try {
    const clientes = await Cliente.find ();
    res.json(clientes)   
 } catch (error) {
    console.log (error)
    res.status(500).send ('error al buscar los  clientes');
    
 }
}

// funcion agregar cliente

exports.agregarClientes = async(req,res)=>{

try {
    let clientes;
    clientes= new Cliente(req.body)
    await clientes.save();
    res.send(clientes);
    
} catch (error) {
    console.log(error)
    res.status (500).send('Error al agregar un cliente');
}
}

// fucion para buscar un solo  cliente por id
exports.buscarCliente = async(req,res) =>{
try {
    const clientes = await Cliente.findById(req.params.id);
    if(!clientes){
        res.status(404).send ('cliente no encontrado con ese ID');
        return
    }
   
    res.json(clientes)  
    
} catch (error) {
    console.log(error)
    res.status (500).send('Error al buscar un cliente');  
}
}

// esta funcion sirve para eliminar un cliente
exports.eliminarCliente = async(req,res)=>{
    try {
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).json({msg:"el cliente no existe"})
            return
        }
        
        
        await Cliente.findOneAndDelete({_id: req.params.id})
        res.json({msg:"El cliente ha sido eliminado"});
        return
        
    } catch (error) {
        res.status (500).send('Error al borrar un cliente');  
    }
    }
    // Esta funcion modificar un cliente
    

    exports.actualizarCliente = async(req, res) =>{

        try {
           const {nombre,apellido , documento, correo,telefono,direccion} = req.body
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
             return res.status(404).send({msg:"el cliente no existe"});
            
        }else{
            cliente.nombre= nombre;
            cliente.apellido = apellido;
            cliente.documento = documento;
            cliente.correo = correo;
            cliente.telefono = telefono;
            cliente.direccion = direccion;
            
            cliente = await Cliente.findOneAndUpdate({_id: req.params.id},cliente,{new:true});
            res.json(cliente);

        } 
        } catch (error) {
            console.log(error)
            res.status(500).send ('hubo unb error al actualizar el  cliente');
        }


        
    }

    