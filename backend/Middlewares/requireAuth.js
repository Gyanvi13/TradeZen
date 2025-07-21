// Middlewares/requireAuth.js
const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");
require("dotenv").config();

const requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ success: false, message: "Access denied. No token provided." });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ success: false, message: "Invalid token." });
      } else {
        const user = await User.findById(decoded.id);
        if (!user) {
          return res.status(404).json({ success: false, message: "User not found." });
        }
        req.user = user; // Attach user info to req
        next();
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

module.exports = requireAuth;
