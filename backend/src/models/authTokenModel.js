// backend/src/models/authTokenModel.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbSetup');

const AuthToken = sequelize.define('AuthToken', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    vendorid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    expiresat: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    createdat: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    updatedat: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
}, {
    tableName: 'auth_tokens',
    timestamps: false,
});

module.exports = AuthToken;
