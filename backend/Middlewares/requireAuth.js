require("dotenv").config();
const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // make sure this is same secret as used during token creation
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = requireAuth;
