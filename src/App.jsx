import "./index.css";
import { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./componets/Layout";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Testimonial from "./pages/Testimonial";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import IFrame from "./componets/IFrame";

function App() {
  const [iFrame, setIFrame] = useState("");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = iFrame || menu ? 'hidden' : '';
  }, [iFrame, menu]);

  return (
    <div className="relative App">
      <IFrame iFrame={iFrame} setIFrame={setIFrame} />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout menu={menu} setMenu={setMenu} />}>
            <Route index element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/testimonial" element={<Testimonial iFrame={iFrame} setIFrame={setIFrame} />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
