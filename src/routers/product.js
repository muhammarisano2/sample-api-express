const express = require('express');
const Router = express.Router();
const productController = require('../controllers/product');

Router
  .get('/', productController.getProduct)
  .get('/:id_product', productController.productDetail)
  .post('/', productController.insertProduct)
  .patch('/:id_product', productController.updateProduct)
  .delete('/:id_product', productController.deleteProduct)

module.exports = Router;