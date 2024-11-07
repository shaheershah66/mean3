import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout({ menu, setMenu }) {
  return (
    <div className="Layout">
      <Header menu={menu} setMenu={setMenu} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
