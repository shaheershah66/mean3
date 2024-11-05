import { useState, useEffect } from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { Link, NavLink, useLocation } from "react-router-dom";
import navLinksJson from "../data/navLinks.json";

export default function Header() {
  const navLinks = navLinksJson;
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(null);

  const controlNavbar = () => {
    if (window.scrollY === 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleSubMenu = (submenuIndex) => {
    if (subMenu === submenuIndex) {
      setSubMenu(null);
    } else {
      setSubMenu(submenuIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className="Header h-[122px] w-full text-white bg-transparent fixed z-20 top-0 left-0">
      {/* mobile menu */}
      <div
        className={`absolute transition-all duration-1000 ease-in-out ${
          menu ? "h-screen py-[60px]" : "h-0 py-0"
        } top-0 left-0 z-40  flex  w-full overflow-hidden text-center bg-white mobile-menu`}
      >
        <ul className="w-full py-[40px] relative mb-[10px] font-sans">
          <div
            onClick={() => setMenu(!menu)}
            className="absolute delay-150 crossBtn right-[30px] top-[-20px] cursor-pointer"
          >
            <svg
              fill="none"
              viewBox="0 0 15 15"
              height="20px"
              width="20px"
              className={`transition-transform duration-1000 delay-150 ease-out ${
                menu ? "-rotate-180" : "rotate-180"
              }`}
            >
              <path
                fill="black"
                fillRule="evenodd"
                d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {navLinks.map((parent, parentIndex) => {
            const hasChildren = parent.hasOwnProperty("children");
            const isActive =
              hasChildren &&
              parent.children.some((child) => child.url === location.pathname);
            return (
              <li>
                {!hasChildren ? (
                  <NavLink
                    onClick={() => {setMenu(!menu); setSubMenu(null)}}
                    to={parent.url}
                    className={({ isActive }) =>
                      `uppercase inline-block leading-[1.6] py-[0.17em] w-full text-lg ${
                        isActive ? "text-[#cd2122]" : "text-black"
                      }`
                    }
                  >
                    {parent.title}
                  </NavLink>
                ) : (
                  <span
                    onClick={() => handleSubMenu(parentIndex)}
                    className={`${
                      isActive ? "text-[#cd2122]" : "text-black"
                    } cursor-pointer text-lg uppercase inline-block w-full leading-[1.6] py-[0.17em]`}
                  >
                    {parent.title}
                    <ul
                      className={`w-full font-sans px-[1em] transition-all duration-[1000ms] ease-in-out overflow-hidden ${
                        subMenu === parentIndex ? "max-h-[500px]" : "max-h-0"
                      }`}
                    >
                      {parent.children.map((child) => {
                        return (
                          <li className="w-full">
                            <NavLink
                              onClick={() => setMenu(!menu)}
                              to={child.url}
                              className={({ isActive }) =>
                                `uppercase inline-block leading-[1.6] py-[0.17em] w-full text-lg ${
                                  isActive ? "text-[#cd2122]" : "text-black"
                                }`
                              }
                            >
                              {child.title}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      {/* mobile menu ends here */}
      <div className="header-bg absolute top-0 left-0 w-full h-[100%] bg-gradient-to-t from-transparent to-black/[.7] -z-10">
        <div className="header-container md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px]">
          <div
            className={`header-first flex w-full items-center text-xs overflow-hidden transition-all ease-in-out ${
              show ? "h-[46px]" : "h-0"
            }`}
          >
            <div className="header-inner-first-icons">
              <SocialMediaIcons />
            </div>

            <div className="header-first-contact">
              <div className="ml-4">
                QUESTIONS? CALL:{" "}
                <a href="tel:+1(832)278-2928" className="font-bold">
                  +1 (832) 278-2928
                </a>
              </div>
            </div>
          </div>
          <div className="divider opacity-20 bg-white w-full h-[1px]"></div>
          <div className="flex items-center justify-between w-full h-auto header-last">
            <div className="flex items-center">
              <div className="relative logo-container group">
                <Link to="/">
                  <img
                    src="assets/mean3-logo.png"
                    width={118}
                    height={70}
                    alt="Mean3 Logo"
                  />
                  <img
                    className="absolute left-0 top-[20%] opacity-0 cursor-pointer"
                    src="assets/mean3-logo.png"
                  ></img>
                </Link>
                {/* hover card */}
                <div className="absolute hidden md:block top-full left-0 w-[440px] shadow-2xl bg-[#cd2122] z-10 pt-[30px] pb-[25px] px-5 mt-[10px] text-xs leading-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none">
                  <div className="flex">
                    <div className="w-1/2 px-4">
                      <div className="flex flex-col items-center logo-container">
                        <img
                          src="assets/mean3-black-logo.png"
                          width={150}
                          height={150}
                          alt="Mean3 Black Logo"
                        />
                        <p className="text-center">
                          Mean3 Software Solution provider
                        </p>
                      </div>
                    </div>
                    <div className="w-1/2 px-4">
                      <p className="mb-5">
                        <strong>+1 (832) 278-2928</strong> <br />
                        Email:{" "}
                        <a href="mailto:info@mean3.com">info@mean3.com</a>
                      </p>
                      <p className="mb-5">
                        Mean3 Software Solutions <br />
                        447 Broadway, 2nd Floor Suite #670, New York, New York
                        10013, United States
                      </p>
                      <SocialMediaIcons />
                    </div>
                  </div>
                </div>
                {/* hover card ends */}
              </div>
              {/* navigation */}
              <nav className="ml-[20px] lg:ml-24">
                {/* menu bar  */}
                <svg
                  onClick={() => setMenu(!menu)}
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  height="22px"
                  width="22px"
                  className="block cursor-pointer opacity-80 lg:hidden"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
                  />
                </svg>
                {/* menu bar ends here */}
                <ul className="hidden lg:flex">
                  {navLinks.map((parent) => {
                    const hasChildren = parent.hasOwnProperty("children");
                    const isActive =
                      hasChildren &&
                      parent.children.some(
                        (child) => child.url === location.pathname
                      );
                    return (
                      <li>
                        {!hasChildren ? (
                          <NavLink
                            to={parent.url}
                            className={({ isActive }) =>
                              `uppercase text-xs py-2 mx-[2px] px-3 z-20 cursor-pointer relative before:content-[''] before:absolute before:rounded-sm before:-z-[2] before:bg-[#cd2122] before:left-0 rounded-sm before:w-full before:hover:animate-middle-open ${
                                isActive ? "bg-[#cd2122]" : ""
                              }`
                            }
                          >
                            {parent.title}
                          </NavLink>
                        ) : (
                          <span
                            className={`${
                              isActive ? "bg-[#cd2122]" : ""
                            } text-xs rounded-sm before:rounded-sm uppercase group py-2 mx-[2px] px-3 z-20 cursor-text relative before:content-[''] before:absolute before:-z-[2] before:bg-[#cd2122] before:left-0 before:w-full before:hover:animate-middle-open`}
                          >
                            {parent.title}
                            <ul className="py-[6px] invisible group-hover:visible group-hover:top-full transition-all text-[#757575] min-w-[230px] top-[120%] absolute left-0 translate-y-2 bg-[#f5f5f5] border-solid border-2 rounded-sm shadow-[0_0_4px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:block before:w-full before:h-[12px] before:top-[-12px]">
                              {parent.children.map((child) => {
                                return (
                                  <li className="w-full">
                                    <NavLink
                                      to={child.url}
                                      className={({ isActive }) =>
                                        `inline-block hover:text-[#323232] hover:bg-[rgba(0,0,0,.04)] ${
                                          isActive
                                            ? "text-[#323232] bg-[rgba(0,0,0,.04)]"
                                            : ""
                                        } w-full px-5 py-[10px] text-xs leading-[14px] border-b-[1px] border-solid border-b-[rgba(0,0,0,.03)] z-10`
                                      }
                                    >
                                      {child.title}
                                    </NavLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
              {/* navigation ends here */}
            </div>
            <div className="btn-container">
              <Link
                to="#"
                className="px-[10px] py-[5px] bg-[#cd2122] font-bold cursor-pointer hover:bg-white hover:text-black flex flex-col border-none"
              >
                <strong className="text-[17px]">Free</strong>
                <span>Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
