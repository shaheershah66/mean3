const Navbar = ({ navLinks, location, NavLink }) => {
  return (
    <ul className="hidden lg:flex">
      {navLinks.map((parent) => {
        const hasChildren = parent.hasOwnProperty("children");
        let isActive = false;

        // Logic for "portfolio" parent
        if (hasChildren && parent.title === "portfolio") {
          isActive = parent.children.some(
            (child) => child.url === location.pathname
          );
        }

        // Logic for "services" parent
        else if (hasChildren && parent.title === "services") {
          isActive = parent.children.some(
            (child) =>
              child.links &&
              child.links.some((link) => link.url === location.pathname)
          );
        }

        return (
          <li key={parent.title}>
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
            ) : parent.title === "portfolio" ? (
              <span
                className={`${
                  isActive ? "bg-[#cd2122]" : ""
                } text-xs rounded-sm before:rounded-sm uppercase group py-2 mx-[2px] px-3 z-20 cursor-text relative before:content-[''] before:absolute before:-z-[2] before:bg-[#cd2122] before:left-0 before:w-full before:hover:animate-middle-open`}
              >
                {parent.title}
                <ul className="py-[6px] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:top-full transition-all text-[#757575] min-w-[230px] top-[120%] absolute left-0 translate-y-2 bg-[#f5f5f5] border-solid border-2 rounded-sm shadow-[0_0_4px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:block before:w-full before:h-[12px] before:top-[-12px]">
                  {parent.children.map((child) => (
                    <li className="w-full" key={child.title}>
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
                  ))}
                </ul>
              </span>
            ) : (
              <span
                className={`${
                  isActive ? "bg-[#cd2122]" : ""
                } text-xs rounded-sm before:rounded-sm uppercase relative group py-2 mx-[2px] px-3 z-20 cursor-text before:content-[''] before:absolute before:-z-[2] before:bg-[#cd2122] before:left-0 before:w-full before:hover:animate-middle-open`}
              >
                {parent.title}
                {/* Mega container */}
                <div className="z-20 leading-[14px] flex flex-wrap lg:-left-[257px] xl:-left-[297px] mega-container invisible opacity-0 group-hover:opacity-100 group-hover:visible py-5 group-hover:top-full transition-all text-black lg:w-[940px] xl:w-[1140px] border-[1px_solid_hsla(0,0%,100%,.8)] top-[120%] absolute translate-y-2 bg-[hsla(0,0%,96%,.95)] rounded-sm shadow-[0_0_4px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:block before:w-full before:h-[12px] before:top-[-12px]">
                  {parent.children.map((item) => (
                    <ul className="w-1/4 px-[15px] pb-[20px]" key={item.title}>
                      <li className="w-full">
                        <span className="block text-sm border-b-solid border-b border-black/[0.1] py-[12px] mb-[15px] font-[600] uppercase">
                          {item.title}
                        </span>
                        <ul className="w-full">
                          {item.links.map((item2) => (
                            <li className="w-full" key={item2.title}>
                              <NavLink
                                to={item2.url}
                                className={({ isActive }) =>
                                  `inline-block w-full py-[10px] relative before:content-[''] before:bg-[#cd2122] before:bottom-0 before:absolute before:transition-all before:left-0 hover:before:w-full before:w-0 before:h-[2px] ${
                                    isActive ? "before:w-full" : ""
                                  }`
                                }
                              >
                                {item2.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  ))}
                </div>
                {/* Mega container ends here */}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
