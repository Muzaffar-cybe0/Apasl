import "../sass/rootLayout.scss";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="rootLayout">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}
