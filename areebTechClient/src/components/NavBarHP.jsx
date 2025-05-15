import { Link } from "react-router-dom";

// Components
import DarkModeToggle from "./DarkModeToggle";

// NavBarHP => NavBarHomePage
const NavBarHP = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="en-text">Events App</span>
        </div>
        <div className="nav-links">
          <Link to="/signUp" className="btn btn-primary btn-sm en-text">
            SignUp
          </Link>
          <Link to="/login" className="btn btn-primary btn-sm en-text">
            Login
          </Link>
        </div>
        <div className="nav-controls">
          <div className="toggle-container">
            <DarkModeToggle />
            <span className="en-text">Dark Mode</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarHP;
