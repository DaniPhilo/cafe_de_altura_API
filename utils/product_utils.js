const Product = require('../models/products');
const Products = require('../models/products');
const { CustomError } = require('../errors/errors.js');

const getProductsByName = async (brand) => {
    try {
        const regex = new RegExp(brand);
        const products = await Product.find({ "brand": { $regex: regex, $options: "i" } });
        return products
    } catch (error) {
        return new CustomError(400, "Invalid parameters");
    }
}

const getProductById = async (id) => {
    try {
        const product = await Product.findOne({ _id: id });
        return product
    } catch (error) {
        return new CustomError(400, "Invalid parameters");
    }
}

const validateProductBody = (body) => {
    const errors = [];
    if (!/^[\w\d -]+$/.test(body.brand)) {
        errors.push("brand");
    }
    if (!/^\d+$/.test(body.price)) {
        errors.push("price");
    }
    if (typeof body.available !== "boolean") {
        errors.push("availability")
    }
    return errors.length ? { result: false, errors: errors } : { result: true }
}

module.exports = {
    getProductsByName,
    getProductById,
    validateProductBody
}