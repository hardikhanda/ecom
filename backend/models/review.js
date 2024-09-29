import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    rating: { type: Number, required: true },
    comment: String
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema, 'reviews');

export { Review };
