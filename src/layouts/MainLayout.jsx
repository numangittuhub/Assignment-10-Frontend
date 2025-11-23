import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
