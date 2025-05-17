import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
// Components
import NavBarLoginSignUp from "../components/NavBarLoginSignUp";

// Consts And values for headers, domain, .....
import { serverDomain, getHeader } from "../consts/values";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  const handleSignUpForm = async (e) => {
    e.preventDefault();
    let response;
    try {
      response = await axios.post(
        `${serverDomain}/api/v1/auth/register`,
        {
          username: username,
          email: email,
          password: password,
          confirmPassword: confirmPass,
        },
        getHeader
      );
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please check your inputs.");
    }
  };
  return (
    <>
      <NavBarLoginSignUp></NavBarLoginSignUp>
      <div className="container">
        <section className="auth-section">
          <div className="auth-container">
            <div className="auth-header">
              <h2 className="en-text">Create New Account</h2>
              <p className="en-text">
                Fill the form below to register for the app
              </p>
            </div>

            <form
              className="auth-form"
              method="POST"
              onSubmit={handleSignUpForm}
            >
              <div className="form-group">
                <label htmlFor="name" className="en-text">
                  username
                </label>
                <input
                  type="text"
                  id="name"
                  name="username"
                  className="form-control"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="en-text">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
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
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="en-text">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control"
                  required
                  onChange={(e) => {
                    setConfirmPass(e.target.value);
                  }}
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary en-text">
                  Sign Up
                </button>
              </div>

              <div className="auth-footer en-text">
                Already have an account? <a href="login.html">Login here</a>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
