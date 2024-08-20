// backend/src/app.js
const express = require('express');
const dbSetup = require('./config/dbSetup');


const app = express();
app.use(express.json());

app.use('/api/vendors', require('./routes/vendorRoutes'));

// Sync database and start the server
dbSetup.sync()
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((err) => {
        console.error('Database sync error:', err);
    });

module.exports = app;

