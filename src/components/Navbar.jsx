import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-green-700 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        <Link to="/" className="text-2xl font-bold">Clean Community</Link>

        <div className="flex gap-6">
          <NavLink to="/" className="hover:text-gray-200">Home</NavLink>
          <NavLink to="/issues" className="hover:text-gray-200">All Issues</NavLink>
          <NavLink to="/add-issue" className="hover:text-gray-200">Add Issue</NavLink>
          <NavLink to="/my-issues" className="hover:text-gray-200">My Issues</NavLink>
          <NavLink to="/my-contribution" className="hover:text-gray-200">My Contribution</NavLink>
          <NavLink to="/login" className="hover:text-gray-200">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
