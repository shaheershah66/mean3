import { useState, useEffect } from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { Link, NavLink, useLocation } from "react-router-dom";
import navLinksJson from "../data/navLinks.json";
import Card from "./Card";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

export default function Header() {
  const navLinks = navLinksJson;
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [subMenu, setSubMenu] = useState(null);
  const [menu, setMenu] = useState(false);

  const handleNavbar = () =>
    window.scrollY === 0 ? setShow(true) : setShow(false);

  const handleSubMenu = (submenuIndex) =>
    subMenu === submenuIndex ? setSubMenu(null) : setSubMenu(submenuIndex);

  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);

    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
  }, [menu]);


  return (
    <div className="Header h-auto md:h-[122px] w-full relative bg-[#333] text-white md:bg-transparent md:fixed z-20 md:top-0 md:left-0">
      {/* mobile menu */}
      <MobileMenu menu={menu} setMenu={setMenu} navLinks={navLinks} NavLink={NavLink} subMenu={subMenu} handleSubMenu={handleSubMenu} setSubMenu={setSubMenu} location={location} />
      {/* mobile menu ends here */}
      {/* bg overlay */}
      <div
        className={`header-bg absolute md:top-0 md:left-0 w-full ${
          show ? "h-[170%]" : "h-full"
        } bg-gradient-to-t from-transparent to-black/[.6] -z-10`}
      ></div>
      {/* bg overlay ends here */}
      {/* header container  */}
      <div className="header-container relative md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px]">
        {/* header top */}
        <div
          className={`header-first flex w-full flex-wrap py-[5px] md:py-0 items-center text-xs overflow-hidden transition-all duration-200 ease-out ${
            show ? "h-auto md:h-[46px] opacity-100" : "h-0 opacity-0"
          }`}
        >
          <div className="header-first-icons m-[10px] md:m-0">
            <SocialMediaIcons />
          </div>

          <div className="header-first-contact">
            <div className="m-[10px] md:ml-4">
              QUESTIONS? CALL:{" "}
              <a href="tel:+1(832)278-2928" className="font-bold">
                +1 (832) 278-2928
              </a>
            </div>
          </div>
        </div>
        {/* header top ends here */}
        {/* divider */}
        <div className="divider opacity-20 bg-white w-full h-[1px]"></div>
        {/* divider ends here */}
        {/* header bottom start here */}
        <div className="relative flex flex-col items-center justify-between w-full md:flex-row header-last">
          <div className="flex items-center self-start justify-center md:justify-start w-full md:w-[20%] lg:w-[20%]">
            <div className="relative my-5 md:my-0 md:mt-[3px] logo-container group">
              <Link to="/">
                <img
                  src="assets/mean3-logo.png"
                  className="w-[118px] h-[70px]"
                  alt="Mean3 Logo"
                />
                <img
                  className="hidden md:block absolute left-0 top-[20%] opacity-0 cursor-pointer"
                  src="assets/mean3-logo.png"
                  alt="Mean3 Logo"
                ></img>
              </Link>
              {/* hover card */}
              <Card />
              {/* hover card ends */}
            </div>
          </div>
          {/* divider */}
          <div className="divider block md:hidden opacity-20 bg-white w-full h-[1px]"></div>
          {/* divider ends here */}
          <div className="w-full px-[10px] md:px-[0px] md:w-[80%] lg:w-[80%] flex justify-between items-center nav-container">
            {/* website menu */}
            <nav className="w-full">
              {/* menu button */}
              <svg
                onClick={() => setMenu(!menu)}
                viewBox="0 0 24 24"
                fill="currentColor"
                height="25px"
                width="25px"
                className="block cursor-pointer opacity-80 lg:hidden"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H4C3.44772 6 3 5.55228 3 5ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 19C3 18.4477 3.44772 18 4 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19Z"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
              {/* menu button ends here */}
             <Navbar navLinks={navLinks} location={location} NavLink={NavLink} />
            </nav>
            {/* website menu ends here */}
            <Link
              to="/contact-us"
              className="px-[10px] text-[11px] uppercase leading-[22px] rounded-sm relative font-open top-2 md:top-0 left-0 pb-[5px] pt-[10px] bg-[#cd2122] font-bold cursor-pointer hover:bg-white hover:text-black flex flex-col"
            >
              <strong className="text-[17px]">Free</strong>
              <span>Quote</span>
            </Link>
          </div>
        </div>
        {/* header bottom ends here */}
      </div>
      {/* header container ends here */}
    </div>
  );
}
