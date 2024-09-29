import jwt from 'jsonwebtoken';

// Middleware to authenticate user
const auth = (req, res, next) => {
  // Get the token from the Authorization header and remove 'Bearer ' prefix
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];  // Extract the token from 'Bearer <token>'

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token using the secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach user ID to request
    req.userId = decoded.id;

    // Move to the next middleware/controller
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default auth;
