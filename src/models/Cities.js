const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Cities = sequelize.define('cities', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    countryId : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Cities;