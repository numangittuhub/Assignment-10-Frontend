import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <RouterProvider router={router} />;
}
