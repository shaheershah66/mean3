import "./index.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./componets/Layout";
import Home from "./pages/Home";
import Shopify from "./pages/Shopify";
import Clients from "./pages/Clients";
import Testimonial from "./pages/Testimonial";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/ecommerce-shopify" element={<Shopify />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
