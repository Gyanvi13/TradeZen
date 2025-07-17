import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./components/Dashboard"; // if AuthenticatedDashboard.jsx is in src


const AuthenticatedDashboard = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      if (!cookies.token) {
        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.post("http://localhost:3002", {}, { withCredentials: true });
        const { status, user } = data;
        if (status) {
          setIsVerified(true);
          toast.success(`Welcome, ${user}`, { position: "top-right" });
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (err) {
        console.error("Verification failed", err);
        removeCookie("token");
        navigate("/login");
      }
    };

    verifyToken();
  }, [cookies, navigate, removeCookie]);

  return (
    <>
      {isVerified && <Dashboard />}
      <ToastContainer />
    </>
  );
};

export default AuthenticatedDashboard;
