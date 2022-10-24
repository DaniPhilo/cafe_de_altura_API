const express = require('express');
const app = express();
require('dotenv').config();

const DBConnect = require('./config/mongoDB');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send({ response: 200, title: "Hello World!" });
});

app.get('/products', (req, res) => {
    res.send('Products');
});

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