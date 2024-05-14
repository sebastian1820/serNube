const Proveedor = require('../models/Proveedor')
exports.buscarProveedores = async(req,res)=>{
    try {
       const proveedores = await Proveedor.find ();
       res.json(proveedores)   
    } catch (error) {
       console.log (error)
       res.status(500).send ('Error al buscar los proveedores');
    }
   }
exports.agregarProveedor = async(req,res)=> {

    try {
        let proveedor
        proveedor = new Proveedor(req.body)
        await proveedor.save();
        res.send(proveedor);
    } catch (error) {
        console.log(error)
        res.status (500).send('Error al agregar un proveedor');
    }
}
exports.buscarProveedor = async(req,res) =>{
    try {
        const proveedor = await Proveedor.findById(req.params.id);
        if(!proveedor){
            res.status(404).send ('Proveedor no encontrado con ese ID');
            return
        }
        res.json(proveedor)  
    } catch (error) {
        console.log(error)
        res.status (500).send('Error al buscar un Proveedor');  
    }
    }
    exports.eliminarProveedor = async(req,res)=>{
        try {
            let proveedor = await Proveedor.findById(req.params.id);
            if(!proveedor){
                res.status(404).json({msg:"el proveedor  no existe"})
                return
            }
            await Proveedor.findOneAndDelete({_id: req.params.id})
            res.json({msg:"El Proveedor ha sido eliminado"});
            return
            
        } catch (error) {
            res.status (500).send('Error al borrar un Proveedor');  
        }
        }
        exports.actualizarProveedor = async(req, res) =>{

            try {
               const {nombre,apellido , documento, correo,telefono,direccion,ciudad} = req.body
            let proveedor = await Proveedor.findById(req.params.id);
    
            if(!proveedor){
                 return res.status(404).send({msg:"el proveedor no existe"});
                
            }else{
                proveedor.nombre= nombre;
                proveedor.apellido = apellido;
                proveedor.documento = documento;
                proveedor.correo = correo;
                proveedor.telefono = telefono;
                proveedor.direccion = direccion;
                proveedor.ciudad= ciudad;
                
                proveedor = await Proveedor.findOneAndUpdate({_id: req.params.id},proveedor,{new:true});
                res.json(proveedor);
    
            } 
            } catch (error) {
                console.log(error)
                res.status(500).send ('hubo un error al actualizar el  proveedor');
            } 
         }
         