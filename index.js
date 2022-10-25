const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const DBConnect = require('./config/mongoDB');
const getAllProducts = require('./controllers/products_controllers');

const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.send({ response: 200, title: "Hello World!" });
});

app.get('/products', getAllProducts);

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