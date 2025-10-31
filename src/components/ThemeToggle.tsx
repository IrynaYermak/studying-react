import { useState } from "react";

export default function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <p>Now we have {isDarkTheme ? "dark" : "light"} theme</p>

      <button type="button" className="button" onClick={toggleTheme}>
        {isDarkTheme ? "Switch light Theme" : "Switch Dark Theme"}
      </button>
    </div>
  );
}
