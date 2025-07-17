import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { ...inputValue },
        { withCredentials: true }
      );
      if (data.success) {
        handleSuccess(data.message);
        setTimeout(() => {
          window.location.href = "http://localhost:3000/dashboard";
        }, 1000); 
      } else {
        handleError(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error(error);
      handleError("Something went wrong.");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-heading">
        <h1>Open a free demat & trading account online</h1>
        <p>Start investing brokerage-free with 1.5+ crore traders</p>
      </div>
      <div className="signup-container">
        <div className="signup-left">
          <img
            src="media/signup.png" // replace with your actual image path
            alt="Zerodha demo"
          />
        </div>
        <div className="signup-right">
          <h2>Signup now</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleOnChange}
              required
            />
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Choose a username"
              value={username}
              onChange={handleOnChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={password}
              onChange={handleOnChange}
              required
            />
            <button type="submit">Signup</button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Signup;
