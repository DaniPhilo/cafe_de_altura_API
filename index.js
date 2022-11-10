const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const DBConnect = require('./config/mongoDB');
const router = require("./routes/routes");

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

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