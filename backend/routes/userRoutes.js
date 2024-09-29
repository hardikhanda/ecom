import express from 'express';
import { registerUser, loginUser, getUser } from '../controllers/userController.js';
import auth from '../middleware/auth.js';  // Middleware to protect routes

const router = express.Router();

// Public routes
router.post('/register', registerUser);  // Register a new user
router.post('/login', loginUser);        // Login user

// Protected routes
router.get('/profile', auth, getUser);   // Get user profile (only logged-in users)

export default router;
