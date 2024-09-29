import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    totalPrice: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    isPaid: { type: Boolean, default: false },
    isDelivered: { type: Boolean, default: false }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema, 'orders');

export { Order };
