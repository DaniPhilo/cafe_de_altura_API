const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Café de Altura API",
            description: "Swagger documentation for Café de Altura API, designed and developed by GammaTech School for its students.",
            version: "1.0.0"
        },
        servers: [
            {
                url: `https://cafe-de-altura-api.vercel.app/api/products`,
                // url: "http://localhost:3001/api/products"
            }
        ],
    },
    apis: ["./swagger/swagger_products.js"]
}

const specs = swaggerJsDoc(options);

module.exports = specs;