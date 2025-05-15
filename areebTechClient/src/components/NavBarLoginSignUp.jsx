import { Link } from "react-router-dom";

// components
import DarkModeToggle from "../components/DarkModeToggle";

const NavBarLoginSignUp = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="en-text">Events App</span>
        </div>

        <div className="nav-links">
          <Link to={"/"} className="nav-link en-text">
            Home
          </Link>
        </div>

        <div className="nav-controls">
          <div className="toggle-container">
            <DarkModeToggle></DarkModeToggle>
            <span className="en-text">Dark Mode</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarLoginSignUp;
