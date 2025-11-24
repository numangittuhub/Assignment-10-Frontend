import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => console.log("User Logged Out"))
      .catch((error) => console.error(error));
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-primary">GreenNest</h1>

        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/issues" className="hover:text-primary">All Issues</Link>

          {user ? (
            <>
              <span className="text-sm font-medium text-gray-700">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-1 bg-red-500 text-white rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-primary">Login</Link>
              <Link to="/register" className="hover:text-primary">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
