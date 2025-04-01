import NavBar from "../components/ui/NavBar.jsx";
import Footer from "../components/ui/Footer.jsx";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainLayout({ numCartItems }) {
  return (
    <>
      <NavBar numCartItems={numCartItems} />
      <ToastContainer />

      <Outlet />

      <Footer />
    </>
  );
}

export default MainLayout;
