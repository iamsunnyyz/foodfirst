// backend/src/config/dbSetup.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
   // logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // Allow self-signed certificates
        },
    },
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
