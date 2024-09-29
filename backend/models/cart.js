import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true }
    }]
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema, 'carts');

export { Cart };
