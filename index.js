const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const DBConnect = require('./config/mongoDB');
const router = require("./routes/routes");

const swaggerUI = require("swagger-ui-express");
const specs = require("./swagger/swagger_config");

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use('/api/products', router);

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