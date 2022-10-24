const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    brand: String,
    price: Number,
    img_url: String,
    available: Boolean
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;