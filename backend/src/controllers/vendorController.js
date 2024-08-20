//backend/src/controllers/vendorController.js
const bcrypt = require('bcryptjs');
const prisma = require('@prisma/client');
const authService = require('../services/authService');
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

// Function to generate a random shop ID with a length of 6
function generateShopId(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }

    return result;
}

// Register a new vendor
exports.registerVendor = async (req, res) => {
    const { name, email, password, shop_name, shop_address, shop_status, shop_description } = req.body;
  
    try {
      // Check if a vendor with the same email already exists
      const existingVendor = await prismaClient.vendor.findUnique({
        where: { email },
      });
  
      if (existingVendor) {
        return res.status(400).json({ message: 'Vendor with this email already exists.' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Generate a unique shop ID
      const shopId = generateShopId();
  
      // Create a new vendor
      const newVendor = await prismaClient.vendor.create({
        data: {
          name,
          email,
          password: hashedPassword,
          shop_name,
          shop_address,
          shop_status,
          shop_id: shopId, 
          shop_description,
        },
      });
  
      res.status(201).json({ message: 'Vendor registered successfully.', vendor: newVendor });
    } catch (error) {
      console.error('Register error:', error);
      res.status(500).json({ message: 'Server error', error });
    }
  };


  exports.loginVendor = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find vendor by email
      const vendor = await prismaClient.vendor.findUnique({
        where: { email },
      });
  
      if (!vendor) {
        return res.status(404).json({ message: 'Vendor not found.' });
      }
  
      // Compare the password
      const isMatch = await bcrypt.compare(password, vendor.password);
  
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials.' });
      }
  
      // Respond with success
      res.status(200).json({ message: 'Login successful', vendor });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
