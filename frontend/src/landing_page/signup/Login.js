// src/landingpage/signupfolder/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

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
        "http://localhost:3002/login",
        inputValue,
        { withCredentials: true }
      );
      if (data.success) {
        handleSuccess(data.message);
        setTimeout(() => {
          window.location.href = "http://localhost:3000/dashboard";
        }, 1000); 
      } else {
        handleError(data.message || "Login failed.");
      }
    } catch (error) {
      console.error(error);
      handleError("Something went wrong.");
    }
  };

  return (
    <div className="login-page">
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
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleOnChange}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account?{" "}
          <Link to="/signup">Signup</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
