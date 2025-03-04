import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const MainLayout = () => {
  console.log(import.meta.env.VITE_name);
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
