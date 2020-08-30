const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

const routes = require("./routes");

const expressSwagger = require('express-swagger-generator')(app);

// Configuration done in this section
const environment = process.env.NODE_ENV || "development";

const envFile = (environment == "production") ? '.env' : `${environment}.env`;
require('dotenv').config({
    path: envFile
});
PORT = process.env.PORT;
SERVICE_NAME = process.env.SERVICE_NAME;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const options = {
    swaggerDefinition: {
        info: {
            description: 'Team-283-Backend',
            title: 'Team-283-Backend',
            version: '1.1.0',
        },
        host: '',
        basePath: '/api/v1',
        produces: [
            "application/json"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {}

    },
    route: {
        url: '/api-docs',
        docs: '/api-docs.json'
    },
    basedir: __dirname, //app absolute path
    files: ['./controllers/**/*.controller.js']
};



app.use('/api/v1', routes);

expressSwagger(options);

app.listen(PORT, () => {
    console.log(`${SERVICE_NAME} (${process.env.NODE_ENV}) on port ${PORT}`);
});