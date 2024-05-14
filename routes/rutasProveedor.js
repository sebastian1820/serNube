const express = require('express');
const router = express.Router();
const ProveedorController = require ('../controllers/ProveedorController');

// esta son las rutas del nuestro crud

router.post ('/',ProveedorController.agregarProveedor);
router.get ('/:id',ProveedorController.buscarProveedor);
router.get ('/',ProveedorController.buscarProveedores);
router.delete ('/:id',ProveedorController.eliminarProveedor);
router.put ('/:id',ProveedorController.actualizarProveedor);




module .exports = router; 