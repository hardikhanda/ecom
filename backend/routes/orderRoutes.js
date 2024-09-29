import express from 'express';
import { createOrder, getUserOrders, getAllOrders } from '../controllers/orderController.js';
import auth from '../middleware/auth.js';        // For logged-in users
import adminAuth from '../middleware/auth.js';  // For admins

const router = express.Router();

// User routes
router.post('/', auth, createOrder);         // Create a new order
router.get('/', auth, getUserOrders);        // Get orders of the logged-in user

// Admin-only route
router.get('/all', adminAuth, getAllOrders); // Get all orders (Admin only)

export default router;
