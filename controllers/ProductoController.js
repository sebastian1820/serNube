const Producto = require('../models/Producto');
exports.buscarProductos = async(req,res)=>{
    try {
       const productos = await Producto.find ();
       res.json(productos)   
    } catch (error) {
       console.log (error)
       res.status(500).send ('Error al buscar los productos');
    }
   }
exports.agregarProducto = async(req,res)=> {

    try {
        let producto
        producto = new Producto(req.body)
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error)
        res.status (500).send('Error al agregar un producto');
    }
}
exports.buscarProducto = async(req,res) =>{
    try {
        const producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).send ('producto no encontrado con ese ID');
            return
        }
        res.json(producto)  
    } catch (error) {
        console.log(error)
        res.status (500).send('Error al buscar un Producto');  
    }
    }
    exports.eliminarProducto = async(req,res)=>{
        try {
            let producto = await Producto.findById(req.params.id);
            if(!producto){
                res.status(404).json({msg:"el producto  no existe"})
                return
            }
            await Producto.findOneAndDelete({_id: req.params.id})
            res.json({msg:"El Prodcuto ha sido eliminado"});
            return
            
        } catch (error) {
            res.status (500).send('Error al borrar un Producto');  
        }
        }
        exports.actualizarProdcuto = async(req, res) =>{

            try {
               const {marca,modelo , fecha, color,sistema} = req.body
            let producto = await Producto.findById(req.params.id);
    
            if(!producto){
                 return res.status(404).send({msg:"el producto no existe"});
                
            }else{
                producto.marca= marca;
                producto.modelo = modelo;
                producto.fecha = fecha;
                producto.color = color;
                producto.sistema = sistema;

                
                producto = await Producto.findOneAndUpdate({_id: req.params.id},producto,{new:true});
                res.json(producto);
    
            } 
            } catch (error) {
                console.log(error)
                res.status(500).send ('hubo un error al actualizar el  producto');
            } 
         }
         