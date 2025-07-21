const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// ---------- SIGNUP ----------
module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create the user
    const user = await User.create({ email, password: hashedPassword, username, createdAt });

    // Generate token
    const token = createSecretToken(user._id);

    // Set secure cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,         // Required for HTTPS (Netlify + Render)
      sameSite: "None",     // Required for cross-origin cookies
      maxAge: 24 * 60 * 60 * 1000 // Optional: 1 day
    });

    // Success response
    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user
    });

  } catch (error) {
    console.error("Signup error:", error);
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: "Email already registered." });
    }
    res.status(500).json({ success: false, message: "Server error, please try again later." });
  }
};

// ---------- LOGIN ----------
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "Incorrect email or password" });
    }

    // Check password
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ success: false, message: "Incorrect email or password" });
    }

    // Generate token
    const token = createSecretToken(user._id);

    // Set secure cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000
    });

    // Success response
    res.status(200).json({ message: "User logged in successfully", success: true });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error, please try again later." });
  }
};
