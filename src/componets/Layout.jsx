import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import IFrame from "./IFrame";

export default function Layout() {
  

  return (
    <div className="relative Layout">
      <IFrame />
      <Header />
      <main>
          <Outlet />
      </main>
      <Footer />
    </div>
  );
}
