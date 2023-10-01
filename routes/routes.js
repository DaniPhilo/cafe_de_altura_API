const express = require('express');
const router = express.Router();


const { getProducts, createProduct, updateProduct, deleteProduct, populateDataBase } = require('../controllers/products_controllers.js');

router.get('/', getProducts);
router.post('/create', createProduct);
router.put('/update', updateProduct);
router.delete('/delete', deleteProduct);

// Route to populate database
router.get('/populate', populateDataBase);

module.exports = router;