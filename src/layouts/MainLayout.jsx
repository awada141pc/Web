import Navbar from "../components/navbar/Navbar";
import FooterComp from "../components/footer/footercomp";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Outlet />
      <FooterComp />
    </div>
  );
};
export default MainLayout;
