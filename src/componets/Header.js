import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Header() {
  return (
    <div className="Header h-[122px] w-full text-white bg-transparent fixed z-20 top-0 left-0">
      <div className="header-bg absolute top-0 left-0 w-full bg-gradient-to-t from-transparent to-black/[.7] -z-10">
        <div className="header-container md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto p-[15px]">
          <div className="header-first w-full flex items-center h-[46px] text-xs">
            <div className="header-inner-first-icons">
              <SocialMediaIcons />
            </div>

            <div className="header-first-contact">
              <div className="ml-4">
                QUESTIONS? CALL:{" "}
                <a href="+1(832)278-2928" className="font-bold">
                  +1 (832) 278-2928
                </a>
              </div>
            </div>
          </div>

          <div className="divider opacity-20 bg-white w-full h-[1px]"></div>

          <div className="header-last w-full flex items-center h-[69px] justify-between">
            <div className="logo-container relative group">
              <a href="#">
                <img
                  className=""
                  src="mean3-logo.png"
                  width={100}
                  alt="Mean3 Logo"
                />
                <img
                  className="absolute left-0 top-full opacity-0"
                  src="mean3-logo.png"
                ></img>
              </a>
              {/* hover card */}
              <div className="absolute top-full left-0 w-[440px] shadow-2xl bg-[#cd2122] z-10 pt-[30px] pb-[25px] px-5 mt-[10px] text-xs leading-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none">
                <div className="flex">
                  <div className="px-4 w-1/2">
                    <div className="logo-container flex flex-col items-center">
                      <img
                        src="mean3-black-logo.png"
                        width={150}
                        height={150}
                        alt="Mean3 Black Logo"
                      />
                      <p className="text-center">
                        Mean3 Software Solution provider
                      </p>
                    </div>
                  </div>
                  <div className="px-4 w-1/2">
                    <p className="mb-5">
                      <strong>+1 (832) 278-2928</strong> <br />
                      Email: <a href="#" className="pointer-events-auto">info@mean3.com</a>
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

            <nav>
              <ul className="flex">
                <li>
                  <a className="py-2 px-3 cursor-pointer hover:bg-[#cd2122]">
                    Home
                  </a>
                </li>
                <li>
                  <a className="py-2 px-3 cursor-pointer hover:bg-[#cd2122]">
                    Services
                  </a>
                </li>
                <li>
                  <a className="py-2 px-3 cursor-pointer hover:bg-[#cd2122]">
                    Our Clients
                  </a>
                </li>
                <li>
                  <a className="py-2 px-3 cursor-pointer hover:bg-[#cd2122]">
                    Blogs
                  </a>
                </li>
                <li>
                  <a className="py-2 px-3 cursor-pointer hover:bg-[#cd2122]">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="py-2 px-3 cursor-pointer hover:bg-[#cd2122]">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="btn-container">
              <a
                href="#"
                className="px-[10px] py-[5px] bg-red-800 font-bold cursor-pointer hover:bg-white hover:text-black flex flex-col border-none"
              >
                <strong className="text-[17px]">Free</strong>
                <span>Quote</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
