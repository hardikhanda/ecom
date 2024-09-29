import express from 'express';
import { getUserCart, addToCart, removeFromCart } from '../controllers/cartController.js';
import auth from '../middleware/auth.js';  // Middleware to protect routes

const router = express.Router();

// User cart routes (protected)
router.get('/', auth, getUserCart);                      // Get the user's cart
router.post('/add', auth, addToCart);                    // Add product to the cart
router.delete('/remove/:productId', auth, removeFromCart); // Remove product from the cart

export default router;
