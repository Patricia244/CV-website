// middleware/authMiddleware.js
const authMiddleware = (req, res, next) => {
    // Check if admin is logged in by checking the existence of a session variable
    if (req.session.admin) {
        // Admin is logged in, proceed to the next middleware or route handler
        next();
    } else {
        // Admin is not logged in, redirect or send an unauthorized response
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authMiddleware;
