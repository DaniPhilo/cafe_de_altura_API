const Product = require('../models/products');
const Products = require('../models/products');

const coffeeJson = require("../config/coffee_data.json");

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

const getOneProduct = async (req, res) => {
    try {
        const brand = { brand: req.params.brand };
        const product = await Product.findOne(brand);
        res.send({ response: 200, products: product });
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

const postCreateProduct = async (req, res) => {
    try {
        const data = req.body;
        const product = await Products.create(data);
        res.send({ response: 201, product: product });
    } catch (error) {
        console.log(error);
    }
}

const putProduct = async (req, res) => {
    try {
        const filter = req.body.id;
        const data = req.body.data;
        const product = await Product.findOneAndUpdate(filter, data);
        res.send({ response: 200, product: product });
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const filter = req.body;
        const product = await Product.findOneAndDelete(filter);
        res.send({ response: 200, product: product });
    } catch (error) {
        console.log(error);
    }
}

const populateDataBase = async (req, res) => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(coffeeJson);
        res.send({ response: 201, message: "Database populated" });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getConnection,
    getAllProducts,
    getOneProduct,
    getAvailableProducts,
    postCreateProduct,
    putProduct,
    deleteProduct,
    populateDataBase
};