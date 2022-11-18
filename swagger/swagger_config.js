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
                // url: `${process.env.DEPLOYMENT_URL}/api/products`
                url: `${process.env.LOCAL_URL}/api/products`
            }
        ]
    },
    apis: ["./swagger/swagger_products.js"]
}

const specs = swaggerJsDoc(options);

module.exports = specs;