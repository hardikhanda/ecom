import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
    address: [{
        street: String,
        city: String,
        state: String,
        zip: String,
    }],
    phone: String,
    orderHistory: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema, 'users');

export { User };
