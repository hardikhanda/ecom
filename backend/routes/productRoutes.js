import express from 'express';
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controllers/productController.js';
import adminAuth from '../middleware/auth.js';  // For admin-only routes

const router = express.Router();

// Public routes
router.get('/', getProducts);            // Get all products
router.get('/:id', getProductById);      // Get a single product by ID

// Admin-only routes
router.post('/', adminAuth, createProduct);      // Create a new product
router.put('/:id', adminAuth, updateProduct);    // Update an existing product
router.delete('/:id', adminAuth, deleteProduct); // Delete a product

export default router;
