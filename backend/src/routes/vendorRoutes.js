const express = require('express');
const vendorController = require('../controllers/vendorController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', vendorController.registerVendor);
router.post('/login', vendorController.loginVendor);

// Example protected route
router.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: `Vendor profile for ID: ${req.vendorId}` });
});

module.exports = router;
