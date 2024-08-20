const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const authToken = await prisma.session.findFirst({
            where: {
                sessionToken: token,
                vendorId: decoded.id,
                expires: {
                    gte: new Date(),
                },
            },
        });

        if (!authToken) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        req.vendorId = decoded.id;
        next();
    } catch (error) {
        console.error("Auth middleware error:", error);
        res.status(401).json({ message: 'Invalid token' });
    }
};
