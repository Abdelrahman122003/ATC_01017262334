import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../css/style.css";
// import "../handlers/js";
// import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import DarkModeToggle from "../components/DarkModeToggle";

// user?
// {
//   "username":"samy",
//   "email": "samy@gmail.com",
//   "password": "samy",
//   "confirmPassword":"samy"
// }
const Login = () => {
  // use States for login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // const navigate = useNavigate();

  // http://localhost:3000/api/v1/auth/login
  // http://localhost:3000/api/v1/auth/register
  // const loginResponse = login(loginEmail, loginPassword);
  // console.log(loginResponse);
  const handleLoginForm = async (e) => {
    e.preventDefault();

    let response;
    try {
      response = await axios.post(
        `http://localhost:3000/api/v1/auth/login`,
        { email: loginEmail, password: loginPassword },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
      toast.success(response.data.message);
      // navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <span className="en-text">Events App</span>
          </div>

          <div className="nav-links">
            <a href="index.html" className="nav-link en-text">
              Home
            </a>
          </div>

          <div className="nav-controls">
            <div className="toggle-container">
              <DarkModeToggle></DarkModeToggle>
              <span className="en-text">Dark Mode</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <section className="auth-section">
          <div className="auth-container">
            <div className="auth-header">
              <h2 className="en-text">Login to Your Account</h2>
              <p className="en-text">
                Enter your credentials to access your events
              </p>
            </div>

            <form
              className="auth-form"
              action="/login"
              method="POST"
              onSubmit={handleLoginForm}
            >
              <div className="form-group">
                <label htmlFor="email" className="en-text">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="en-text">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                  }}
                  required
                />
                {/* <a href="sign-up.html" class="forgot-password en-text">
                  Forgot password?
                </a> */}
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary en-text">
                  Login
                </button>
              </div>
              <div className="auth-footer en-text">
                Don't have an account? <a href="sign-up.html">Sign up here</a>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
