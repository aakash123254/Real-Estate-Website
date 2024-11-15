// Components/Login.jsx
import React, { useState } from "react";
import "../App.css";

const Login = ({ onLoginSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged in with", email, password); // Log the values for debugging
    onLoginSubmit(); // Trigger the callback to hide the login page and go back to the home
  };

  return (
    <>
      <style>
        {`
        /* Global Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Roboto', sans-serif;
          background-color: #f4f7fc;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          overflow: hidden;
        }

        /* Centering the login page container */
        .login-page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #eceff1;
        }

        /* Styling the login container */
        .login-container {
          background-color: #ffffff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        h2 {
          color: #333;
          margin-bottom: 20px;
          font-size: 24px;
        }

        .login-form label {
          font-size: 14px;
          color: #555;
          text-align: left;
          margin-bottom: 5px;
          display: block;
        }

        .login-form input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 16px;
          outline: none;
          transition: all 0.3s ease-in-out;
        }

        .login-form input:focus {
          border-color: #3498db;
          box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
        }

        /* Styling for the button */
        .login-button {
          background-color: #3498db;
          color: #fff;
          padding: 12px 20px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          width: 100%;
          margin-top: 10px;
        }

        .login-button:hover {
          background-color: #2980b9;
        }

        /* Optional: Add a link for forgotten passwords */
        .forgot-password {
          font-size: 14px;
          color: #3498db;
          text-decoration: none;
          margin-top: 10px;
          display: block;
          text-align: center;
        }

        .forgot-password:hover {
          text-decoration: underline;
        }

        /* Optional: Add background animation */
        body {
          background: linear-gradient(135deg, #3498db, #8e44ad);
          background-size: 400% 400%;
          animation: gradient 10s ease infinite;
        }

        /* Gradient animation */
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        `}
      </style>

      <div className="login-page">
        <div className="login-container">
          <h2>Login to Your Account</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
