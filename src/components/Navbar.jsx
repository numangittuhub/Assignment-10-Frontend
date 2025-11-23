import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const navLinks = (
    <>
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/issues" className="nav-link">All Issues</NavLink>
      <NavLink to="/add-issue" className="nav-link">Add Issue</NavLink>
      <NavLink to="/my-issues" className="nav-link">My Issues</NavLink>
      <NavLink to="/my-contribution" className="nav-link">My Contribution</NavLink>
      <NavLink to="/login" className="nav-link">Login</NavLink>
    </>
  );

  return (
    <nav className="bg-green-700 dark:bg-gray-900 text-white dark:text-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">Clean Community</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks}

          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="p-2 rounded-lg bg-green-800 dark:bg-gray-700">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-green-600 dark:bg-gray-800 flex flex-col gap-3 px-5 py-4">
          {navLinks}

          {/* Toggle button in mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-green-800 dark:bg-gray-700 w-28"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
