'use strict';

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

module.exports = function (app) {
    const options = {
        swaggerDefinition: {
            basePath: '/'
        },
        apis: ['./src/config/swaggerDocs.js'], // Route array
    };

    const swaggerSpec = swaggerJSDoc(options);

    app.use("/swagger", swaggerUi.serve);
    app.get(
        "/swagger",
        swaggerUi.setup(swaggerSpec, {
            explorer: true
        })
    );
};