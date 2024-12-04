import "./index.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./componets/Layout";
import Home from "./pages/Home";
import Shopify from "./pages/Shopify";
import Magento from "./pages/Magento";
import BigCommerce from "./pages/BigCommerce";
import WooCommerce from "./pages/WooCommerce";
import WebDevelopment from "./pages/WebDevelopment";
import WordpressDevelopment from "./pages/WordpressDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import GameDesignAndDevelopment from "./pages/GameDesignAndDevelopment";
import Clients from "./pages/Clients";
import Testimonial from "./pages/Testimonial";
import Blogs from "./pages/Blogs";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/ecommerce-shopify" element={<Shopify plus={false} />} />
            <Route path="/shopify-plus" element={<Shopify plus={true} />} />
            <Route path="/magento-development" element={<Magento />} />
            <Route path="/bigcommerce-development" element={<BigCommerce />} />
            <Route path="/woocommerce-development" element={<WooCommerce />} />
            <Route path="/web-development-designing" element={<WebDevelopment />} />
            <Route path="/wordpress-development" element={<WordpressDevelopment />} />
            <Route path="/mobile-application-development" element={<MobileAppDevelopment />} />
            <Route path="/game-design-and-development" element={<GameDesignAndDevelopment />} />
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
