const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const { route } = require('./categoriesRoutes');

router.get('/products', productsController.list);
/*router.get('/products/new', productsController.new);
router.get('/products/recommended', productsController.recomended);
router.get('/products/detail/:id', productsController.detail);*/
//Rutas exigidas para la creación del CRUD
/*router.get('/products/add', productsController.add);
router.post('/products/create', productsController.create);
router.get('/products/edit/:id', productsController.edit);
router.put('/products/update/:id', productsController.update);
router.get('/products/delete/:id', productsController.delete);
router.delete('/products/delete/:id', productsController.destroy);*/

// crear: POST /products
// listar: GET /products
// editar: PUT o PATCH /products/id
// eliminar: DELETE /products/id
// detalle: GET /products/id

/*router.post('/api/products', productsController.createProduct)
router.delete('/api/products/:id', productsController.deleteProduct)*/

module.exports = router;