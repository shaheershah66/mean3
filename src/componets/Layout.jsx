import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import IFrame from "./IFrame";
import CmsSliderOverlay from "./CmsSliderOverlay";

export default function Layout() {
  return (
    <div className="relative Layout">
      <CmsSliderOverlay />
      <IFrame />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
