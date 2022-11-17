const express = require('express');
const router = express.Router();


const { getConnection, getAllProducts, getOneProduct, getAvailableProducts, postCreateProduct, putProduct, deleteProduct, populateDataBase } = require('../controllers/products_controllers.js');

router.get('/', getAllProducts);
router.get('/coffee/:brand', getOneProduct);
router.post('/create', postCreateProduct);
router.put('/update', putProduct);
router.delete('/delete', deleteProduct);

// Route to populate database
router.get('/populate', populateDataBase);

module.exports = router;