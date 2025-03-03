import { Outlet } from "react-router-dom";

const MainLayout = () => {
  console.log(import.meta.env.VITE_name);
  return (
    <div className="max-w-7xl mx-auto">
      <Outlet></Outlet>
      <div>hello world</div>
    </div>
  );
};

export default MainLayout;
