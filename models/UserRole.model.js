const {
    Sequelize,
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require("../utils/database.connection");

const UserRole = sequelize.define('UserRole', {
    userRoleId: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    msisdn: {
        type: DataTypes.STRING
    }
}, {
    indexes: [{
        unique: true,
        fields: ['msisdn', 'email']
    }],
    sequelize,
    modelName: 'userRole'
});


module.exports = UserRole;