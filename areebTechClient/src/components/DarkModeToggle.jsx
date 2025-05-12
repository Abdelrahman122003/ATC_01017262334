import { useState, useEffect } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [darkMode]);

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        id="darkModeToggle"
        onChange={() => {
          setDarkMode(!darkMode);
        }}
      />
      <span className="slider"></span>
    </label>
  );
};

export default DarkMode;
