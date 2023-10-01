const express = require('express');
const router = express.Router();


const { getProducts, postCreateProduct, putProduct, deleteProduct, populateDataBase } = require('../controllers/products_controllers.js');

router.get('/', getProducts);
router.post('/create', postCreateProduct);
router.put('/update', putProduct);
router.delete('/delete', deleteProduct);

// Route to populate database
router.get('/populate', populateDataBase);

module.exports = router;