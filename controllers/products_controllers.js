const Product = require('../models/products');
const Products = require('../models/products');
const { CustomError } = require('../errors/errors.js');

const coffeeJson = require("../config/coffee_data.json");

const { getProductsByName, getProductById, validateProductBody } = require('../utils/product_utils.js');

const getConnection = (req, res) => {
    res.send({ response: 200, message: "Connection successfully stablished. Use route '/products' to get all products, or route '/available' to get just available products." })
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Products.find({});
        return res.status(200).send({ response: 200, products: products });
    } catch (error) {
        const customError = new CustomError(500, "Something went wrong. Please, try later.")
        return next(customError)
    }
}

const getProductsByQuery = async (req, res, next) => {
    try {
        const { id, brand } = req.query;
        if (id) {
            const product = await getProductById(id);
            if (product instanceof CustomError) {
                return next(product)
            }
            return res.status(200).send({ response: 200, products: product })
        }
        if (brand) {
            const products = await getProductsByName(brand);
            if (products instanceof CustomError) {
                return next(products)
            }
            return res.status(200).send({ response: 200, products: products });
        }
        else {
            const customError = new CustomError(400, "Invalid parameters");
            return next(customError)
        }
    } catch (error) {
        const customError = new CustomError(400, "Invalid parameters");
        return next(customError)
    }
}

const getAvailableProducts = async (req, res) => {
    try {
        const products = await Products.find({ "available": true });
        res.send({ response: 200, products: products });
    } catch (error) {
        const customError = new CustomError(500, "Something went wrong. Please, try later.")
        return next(customError)
    }
}

const postCreateProduct = async (req, res, next) => {
    try {
        const data = req.body;
        const validation = validateProductBody(data);
        if (!validation.result) {
            const error = new CustomError(400, `Invalid ${validation.errors.join(", ")}`);
            return next(error)
        }
        const product = await Products.create(data);
        return res.status(201).send({ response: 201, product: product });
    } catch (error) {
        const customError = new CustomError(500, "Something went wrong. Please, try later.")
        return next(customError)
    }
}

const putProduct = async (req, res, next) => {
    try {
        const filter = req.body.id;
        const data = req.body.data;
        const validation = validateProductBody(data);
        if (!validation.result) {
            const error = new CustomError(400, `Invalid ${validation.errors.join(", ")}`);
            return next(error)
        }
        const product = await Product.findOneAndUpdate(filter, data);
        res.status(200).send({ response: 200, product: product });
    } catch (error) {
        const customError = new CustomError(500, "Something went wrong. Please, try later.")
        return next(customError)
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const { _id } = req.body;
        if (!_id) {
            const customError = new CustomError(400, "Invalid parameters");
            return next(customError)
        }
        const product = await Product.findOneAndDelete({ _id: _id });
        res.send({ response: 200, product: product });
    } catch (error) {
        const customError = new CustomError(400, "Invalid parameters");
        return next(customError)
    }
}

const populateDataBase = async (req, res) => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(coffeeJson);
        res.send({ response: 201, message: "Database populated" });
    } catch (error) {
        const customError = new CustomError(500, "Something went wrong. Please, try later.")
        return next(customError)
    }
}

module.exports = {
    getConnection,
    getAllProducts,
    getProductsByQuery,
    getAvailableProducts,
    postCreateProduct,
    putProduct,
    deleteProduct,
    populateDataBase
};