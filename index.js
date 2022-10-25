const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const DBConnect = require('./config/mongoDB');
const { getConnection, getAllProducts, getAvailableProducts } = require('./controllers/products_controllers');

const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', getConnection);
app.get('/products', getAllProducts);
app.get('/available', getAvailableProducts);

const appInit = async () => {
    try {
        DBConnect(process.env.MONGODB_URI)
            .then(() => console.log('DB connected'))
            .then(app.listen(PORT, () => {
                console.log(`Server listening on port ${PORT}`)
            }));

    } catch (error) {
        console.log(error);
    }
}

appInit();

module.exports = app;