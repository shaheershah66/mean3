import "./index.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./componets/Layout";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
