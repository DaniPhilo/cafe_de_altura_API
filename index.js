const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const DBConnect = require('./config/mongoDB');

const { CustomError } = require('./errors/errors');

const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Main routes
const router = require("./routes/routes");
app.use('/api/coffees', router);

//Error handlers
app.use((error, req, res, next) => {
    if (error instanceof CustomError) {
        return res.status(error.status).send({ response: error.status, product: false, error: error.message })
    } else {
        return next(error)
    }
});

app.use((req, res) => {
    res.status(404).send({ response: 404, message: "Route not found"})
})


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