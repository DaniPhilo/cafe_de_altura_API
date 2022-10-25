const Products = require('../models/products');

const getConnection = (req, res) => {
    res.send({ response: 200, message: "Connection successfully stablished. Use route '/products' to get all products, or route '/available' to get just available products." })
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Products.find({});
        res.send({ response: 200, products: products });
    } catch (error) {
        console.log(error);
    }
}

const getAvailableProducts = async (req, res) => {
    try {
        const products = await Products.find({ "available": true });
        res.send({ response: 200, products: products });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getConnection,
    getAllProducts,
    getAvailableProducts
};