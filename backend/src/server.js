const express = require('express');
const prisma = require('@prisma/client');
const vendorRoutes = require('./routes/vendorRoutes');
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

const app = express();

app.use(express.json());

app.use('/api/vendors', vendorRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
