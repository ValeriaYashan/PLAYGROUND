const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

router.get('/categories', categoriesController.list);
/*router.get('/categories/detail/:id', categoriesController.detail);*/

router.get('/api/categories', categoriesController.getCategoriestList)
/*router.get('/api/categories/:id', categoriesController.getCategoriesDetail)*/


module.exports = router;