import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  // Initialize `isDark` to true since you want dark mode to be the default
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme in localStorage and update the state
    const currentTheme = localStorage.getItem("daisyUI-theme");
    // If there's no saved theme, default to dark mode
    const theme = currentTheme ? currentTheme : "dark";
    setIsDark(theme === "dark");
    // Set the theme on the document element
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    localStorage.setItem("daisyUI-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="flex items-center">
      <span className="text-sm text-base-content mr-2">Light</span>
      <input
        type="checkbox"
        className="toggle toggle-primary"
        checked={isDark}
        onChange={toggleTheme}
      />
      <span className="text-sm text-base-content ml-2">Dark</span>
    </div>
  );
};

export default ThemeSwitcher;
