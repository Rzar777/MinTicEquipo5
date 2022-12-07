const {Router} = require('express');
var controllerCatalogo=require('../controllers/ControllerCatalogo');
const router = Router();

//method routes

router.post('/crearproducto',controllerCatalogo.saveProducto);
router.get('/buscar/:id', controllerCatalogo.buscarProducto);
router.get('/buscarall/:idb?',controllerCatalogo.listarTodo);
router.delete('/delete/:id', controllerCatalogo.borrarProducto);
router.put('/actualizar/:id', controllerCatalogo.updateProducto);

//export default router;

module.exports=router;