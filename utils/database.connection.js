const { Sequelize } = require('sequelize');


const environment = process.env.NODE_ENV || "development";
const envFile = (environment == "production") ? '.env' : `${environment}.env`;
require('dotenv').config({
    path: envFile
});

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    host: rocess.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;