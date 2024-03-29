const Product = require('../models/products');
const { CustomError } = require('../errors/errors.js');

const coffeeJson = require("../config/coffee_data.json");

const { getProductsByName, getProductById, validateProductBody } = require('../utils/product_utils.js');

const getProducts = async (req, res, next) => {
    try {
        const { id, brand } = req.query;
        if (!id && !brand) {
            const products = await Product.find({});
            return res.status(200).send({ response: 200, products: products });
        } else {
            const products = await getProductsByQuery(id, brand);
            if (products instanceof CustomError) {
                return next(products)
            }
            return res.status(200).send({ response: 200, products: products });
        }
    } catch (error) {
        const customError = new CustomError(500, "Something went wrong. Please, try later.")
        return next(customError)
    }
}

const getProductsByQuery = async (id, brand) => {
    if (id) {
        const product = await getProductById(id);
        return product
    }
    if (brand) {
        const products = await getProductsByName(brand);
        return products
    }
}

const getAvailableProducts = async (req, res) => {
    try {
        const products = await Product.find({ "available": true });
        res.send({ response: 200, products: products });
    } catch (error) {
        const customError = new CustomError(500, "Something went wrong. Please, try later.")
        return next(customError)
    }
}

const createProduct = async (req, res, next) => {
    try {
        const data = req.body;
        const validation = validateProductBody(data);
        if (!validation.result) {
            const error = new CustomError(400, `Invalid ${validation.errors.join(", ")}`);
            return next(error)
        }
        const product = await Product.create(data);
        return res.status(201).send({ response: 201, product: product });
    } catch (error) {
        const customError = new CustomError(500, "Something went wrong. Please, try later.")
        return next(customError)
    }
}

const updateProduct = async (req, res, next) => {
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
    getProducts,
    getAvailableProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    populateDataBase
};