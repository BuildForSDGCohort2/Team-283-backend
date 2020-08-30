const { Sequelize } = require('sequelize');


const environment = process.env.NODE_ENV || "development";
const envFile = (environment == "production") ? '.env' : `${environment}.env`;
require('dotenv').config({
    path: envFile
});

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
});

const testDBConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testDBConnection();

module.exports = sequelize;