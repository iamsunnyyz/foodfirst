// backend/src/models/vendorModel.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbSetup');

const Vendor = sequelize.define('Vendor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    shopname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shopaddress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shopdescription: {
        type: DataTypes.STRING,
    },
    shopstatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: true, // Assuming shops are open by default
    },
    createdat: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    updatedat: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'vendors',
    timestamps: false,
});

module.exports = Vendor;
