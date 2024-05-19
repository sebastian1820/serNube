const express = require('express');
const router = express.Router();
const ProductoController = require ('../controllers/ProductoController');


// esta son las rutas del nuestro crud

router.post ('/',ProductoController.agregarProducto);
router.get ('/',ProductoController.buscarProductos);
router.get ('/:id',ProductoController.buscarProducto);
router.delete ('/:id',ProductoController.eliminarProducto);
router.put ('/:id',ProductoController.actualizarProdcuto);




module .exports = router; 