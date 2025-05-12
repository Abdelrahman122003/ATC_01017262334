import DarkModeToggle from "../components/DarkModeToggle";
const SignUp = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <span className="en-text">Events App</span>
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
              <h2 className="en-text">Create New Account</h2>
              <p className="en-text">
                Fill the form below to register for the app
              </p>
            </div>

            <form className="auth-form" action="/signup" method="POST">
              <div className="form-group">
                <label htmlFor="name" className="en-text">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
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
