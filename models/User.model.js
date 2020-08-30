const {
    Sequelize,
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require("../utils/database.connection");

const User = sequelize.define('User', {
    msisdn: {
        DataTypes.STRING
    },
    email: {
        DataTypes.STRING
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    countryCode: DataTypes.STRING(length = 2),
    language: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    indexes: [{
        unique: true,
        fields: ['msisdn', 'email']
    }],
    sequelize,
    modelName: 'user'
});


module.exports = User;