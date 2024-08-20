const jwt = require('jsonwebtoken');

exports.generateToken = (vendorId) => {
    return jwt.sign({ id: vendorId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
