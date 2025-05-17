import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

// Components
import NavBarLoginSignUp from "../components/NavBarLoginSignUp";

// Consts And values for headers, domain, .....
import { getHeader, serverDomain } from "../consts/values";

// user?
// {
//   "username":"samy",
//   "email": "samy@gmail.com",
//   "password": "samy",
//   "confirmPassword":"samy"
// }

// Admin?
// {
//   "username": "zoombieAdmin",
//   "email": "admin@gmail.com",
//   "password": "admin"
// }

const Login = () => {
  // use States for login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();
  const handleLoginForm = async (e) => {
    e.preventDefault();

    let response;
    try {
      response = await axios.post(
        `${serverDomain}/api/v1/auth/login`,
        { email: loginEmail, password: loginPassword },
        getHeader
      );
      // Set Token in localStorage and access it in backend to allow user to access any resource
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      const user = response.data.data.user;
      toast.success(response.data.message);
      // Navigate to user or admin depend on user role
      if (user.role === "User") navigate("/user/dashboard");
      else navigate("/admin/dashboard");
    } catch (error) {
      console.log(error.message);
      toast.error(
        error.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    }
  };

  return (
    <>
      <NavBarLoginSignUp></NavBarLoginSignUp>
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
