import { useState, useEffect } from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const navLinks = [
    {
      title: "home",
      url: "/",
    },

    {
      title: "services",
      url: "/services",
    },

    {
      title: "portfolio",
      children: [
        {
          title: "our clients",
          url: "/clients",
        },

        {
          title: "clients testimonials",
          url: "/clients-testimonials",
        },
      ],
    },

    {
      title: "blogs",
      url: "/blogs",
    },

    {
      title: "about us",
      url: "/about-us",
    },

    {
      title: "contact us",
      url: "/contact-us",
    },
  ];
  const location = useLocation();
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY === 0) {
      setShow(true);
    } else {
      setShow(false);
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
                    className=""
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
                <div className="absolute top-full left-0 w-[440px] shadow-2xl bg-[#cd2122] z-10 pt-[30px] pb-[25px] px-5 mt-[10px] text-xs leading-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none">
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
              <nav className="ml-24">
                <ul className="flex">
                  {navLinks.map((parent) => {
                    const hasChildren = parent.hasOwnProperty("children");
                    const isActive = hasChildren && parent.children.some(child => child.url === location.pathname);

                    return (
                      <li>
                        {!hasChildren ? (
                          <NavLink
                            to={parent.url}
                            className={({ isActive }) =>
                              `uppercase py-2 mx-[2px] px-3 z-20 cursor-pointer relative before:content-[''] before:absolute before:-z-[2] before:bg-[#cd2122] before:left-0 before:w-full before:hover:animate-middle-open ${
                                isActive ? "bg-[#cd2122]" : ""
                              }`
                            }
                          >
                            {parent.title}
                          </NavLink>
                        ) : (
                          <span className={`${isActive? "bg-[#cd2122]" : ""} uppercase group py-2 mx-[2px] px-3 z-20 cursor-text relative before:content-[''] before:absolute before:-z-[2] before:bg-[#cd2122] before:left-0 before:w-full before:hover:animate-middle-open`}>
                            {parent.title}
                            <ul className="py-[6px] invisible group-hover:visible group-hover:top-full transition-all text-[#757575] min-w-[230px] top-[120%] absolute left-0 translate-y-2 bg-[#f5f5f5] border-solid border-2 rounded-sm shadow-[0_0_4px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:block before:w-full before:h-[12px] before:top-[-12px]">
                              {
                                parent.children.map((child) => {
                                  return(
                                    <li className="w-full">
                                      <NavLink 
                                        to={child.url}
                                        className={({ isActive }) => `inline-block hover:text-[#323232] hover:bg-[rgba(0,0,0,.04)] ${isActive ? "text-[#323232] bg-[rgba(0,0,0,.04)]" : ""} w-full px-5 py-[10px] text-xs leading-[14px] border-b-[1px] border-solid border-b-[rgba(0,0,0,.03)] z-10`}
                                      >
                                        {child.title}
                                      </NavLink>
                                    </li>
                                  )
                                })
                              } 
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
