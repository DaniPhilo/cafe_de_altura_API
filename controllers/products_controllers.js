const Products = require('../models/products');

const getAllProducts = async (req, res) => {
    try {
        const products = await Products.find({});
        res.send(products);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getAllProducts;