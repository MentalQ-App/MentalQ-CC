// routes/routes.js
const express = require('express');
const userController = require('../controllers/userController');
const register = require('../controllers/register');  

const router = express.Router();

// CRUD operations for Users
router.post('/users', userController.createUser);       // Create
router.get('/users', userController.getAllUsers);       // Read all
router.get('/users/:id', userController.getUserById);   // Read specific
router.put('/users/:id', userController.updateUser);    // Update
router.delete('/users/:id', userController.deleteUser); // Delete

// Register Routes
router.post('/register', userController.registerUser);

module.exports = router;
