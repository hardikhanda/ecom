import { Order } from '../models/order.js';

// Create an order
export const createOrder = async (req, res) => {
  const { userId, products, totalPrice, paymentMethod, shippingAddress } = req.body;
  try {
    const order = new Order({
      user: userId,
      products,
      totalPrice,
      paymentMethod,
      shippingAddress,
      isPaid: false,
      isDelivered: false,
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user orders
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders (Admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
