import { RiMoonLine, RiSunLine } from "@remixicon/react";
import { useEffect, useState } from "react";

export default function ThemeController() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className="swap swap-rotate cursor-pointer">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />

      <div
        className={`transition-all duration-800 ease-in-out ${
          theme === "light" ? "rotate-0" : "rotate-0"
        }`}
      >
        {theme === "light" ? (
          <p className="flex gap-2 items-center">
            {" "}
            <RiSunLine size={24} /> Light Mode
          </p>
        ) : (
          <p className="flex gap-2 items-center">
            {" "}
            <RiMoonLine size={24} />
            Dark Mode{" "}
          </p>
        )}
      </div>
    </label>
  );
}
