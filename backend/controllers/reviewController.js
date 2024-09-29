import { Review } from '../models/review.js';
import { Product } from '../models/product.js';

// Create a review
export const createReview = async (req, res) => {
  const { productId, rating, comment } = req.body;
  try {
    const review = new Review({
      user: req.userId,
      product: productId,
      rating,
      comment,
    });
    await review.save();

    // Update product rating
    const product = await Product.findById(productId);
    product.numReviews += 1;
    product.rating = ((product.rating * (product.numReviews - 1)) + rating) / product.numReviews;
    await product.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
