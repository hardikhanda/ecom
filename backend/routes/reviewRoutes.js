import express from 'express';
import { createReview } from '../controllers/reviewController.js';
import auth from '../middleware/auth.js';  // Middleware to protect routes

const router = express.Router();

// Protected route: only logged-in users can leave reviews
router.post('/', auth, createReview);

export default router;
