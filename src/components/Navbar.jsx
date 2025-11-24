import { Link, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { AuthContext } from "../provider/AuthProvider"; // Auth Context

const Navbar = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const handleLogout = async () => {
    try {
      await logOut();
      alert("Logged out successfully!");
    } catch (err) {
      console.error(err);
      alert("Logout failed!");
    }
  };

  return (
    <nav className="bg-green-700 dark:bg-gray-900 text-white dark:text-gray-200 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Clean Community
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"}>Home</NavLink>
          <NavLink to="/issues" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"}>All Issues</NavLink>

          {user && (
            <>
              <NavLink to="/add-issue" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"}>Add Issue</NavLink>
              <NavLink to="/my-issues" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"}>My Issues</NavLink>
              <NavLink to="/my-contribution" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"}>My Contribution</NavLink>
            </>
          )}

          {/* Login / Logout */}
          {user ? (
            <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded-lg hover:opacity-90">Logout</button>
          ) : (
            <>
              <NavLink to="/login" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"}>Login</NavLink>
              <NavLink to="/register" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"}>Register</NavLink>
            </>
          )}

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-lg bg-green-800 dark:bg-gray-700">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-green-600 dark:bg-gray-800 flex flex-col gap-3 px-5 py-4">
          <NavLink to="/" className="hover:text-yellow-200">Home</NavLink>
          <NavLink to="/issues" className="hover:text-yellow-200">All Issues</NavLink>

          {user && (
            <>
              <NavLink to="/add-issue" className="hover:text-yellow-200">Add Issue</NavLink>
              <NavLink to="/my-issues" className="hover:text-yellow-200">My Issues</NavLink>
              <NavLink to="/my-contribution" className="hover:text-yellow-200">My Contribution</NavLink>
            </>
          )}

          {user ? (
            <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded-lg hover:opacity-90">Logout</button>
          ) : (
            <>
              <NavLink to="/login" className="hover:text-yellow-200">Login</NavLink>
              <NavLink to="/register" className="hover:text-yellow-200">Register</NavLink>
            </>
          )}

          {/* Mobile Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-lg bg-green-800 dark:bg-gray-700 w-28">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
