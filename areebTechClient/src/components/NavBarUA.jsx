import DarkModeToggle from "./DarkModeToggle";

// NavBarUA => NavBarUserAdmin
const NavBarUA = (props) => {
  const { role } = props;
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="en-text">{role} Dashboard</span>
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
export default NavBarUA;
