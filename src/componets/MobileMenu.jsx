const MobileMenu = ({
  menu,
  setMenu,
  navLinks,
  subMenu,
  handleSubMenu,
  setSubMenu,
  location,
  NavLink,
}) => {
  return (
    <div
      className={`absolute duration-700 ease-in-out block lg:hidden ${
        menu ? "h-screen py-[60px] overflow-auto" : "h-0 py-0 overflow-hidden"
      } top-0 left-0 z-40 flex w-full text-center bg-white mobile-menu`}
    >
      {/* Cross Button */}
      <div
        onClick={() => {
          setMenu(!menu);
          setSubMenu(null);
        }}
        className={`${
          menu
            ? "fixed"
            : "absolute rotate-180 transition-transform duration-1000 ease-out delay-150"
        } w-[54px] h-[54px] cursor-pointer right-[30px] z-50 top-[30px]`}
      >
        <span
          className={`${
            menu
              ? "before:animate-grow after:animate-grow before:delay-200 after:delay-700"
              : ""
          } relative block w-full h-full before:content-[''] before:w-[2px] before:block before:absolute before:h-[15px] before:bg-black before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 after:content-[''] after:w-[2px] after:block after:absolute after:h-[15px] after:bg-black after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-45`}
        ></span>
      </div>
      {/* cross button ends here */}
      <ul className="w-full py-[40px] relative mb-[10px] font-sans">
        {navLinks.map((parent, parentIndex) => {
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
                  onClick={() => setMenu(!menu)}
                  to={parent.url}
                  className={({ isActive }) =>
                    `uppercase leading-[1.6] inline-block py-[0.17em] text-lg ${
                      isActive ? "text-[#cd2122]" : "text-black"
                    }`
                  }
                >
                  {parent.title}
                </NavLink>
              ) : (
                <>
                  <span
                    onClick={() => handleSubMenu(parentIndex)}
                    className={`${
                      isActive ? "text-[#cd2122]" : "text-black"
                    } text-lg uppercase leading-[1.6] py-[0.17em]`}
                  >
                    {parent.title}
                  </span>
                  {parent.title === "portfolio" ? (
                    <ul
                      className={`w-full font-sans transition-all duration-700 overflow-hidden ease-in-out ${
                        subMenu === parentIndex
                          ? "max-h-[500px] pb-[1em]"
                          : "max-h-0 pb-0"
                      }`}
                    >
                      {parent.children.map((child) => (
                        <li className="w-full" key={child.title}>
                          <NavLink
                            onClick={() => {
                              setMenu(!menu);
                              setSubMenu(null);
                            }}
                            to={child.url}
                            className={({ isActive }) =>
                              `uppercase leading-[1.6] py-[0.17em] inline-block text-lg ${
                                isActive ? "text-[#cd2122]" : "text-black"
                              }`
                            }
                          >
                            {child.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    // mega container
                    <ul
                      className={`w-full font-sans transition-all duration-700 ease-in-out overflow-hidden ${
                        subMenu === parentIndex
                          ? "max-h-[2000px] pb-[1em]"
                          : "max-h-0 pb-0"
                      }`}
                    >
                      {parent.children.map((child) => (
                        <li className="w-full" key={child.title}>
                          <>
                            <span className="inline-block mt-5 text-[#DA2128] text-lg uppercase font-[800] underline py-[0.17em]">
                              {child.title}
                            </span>
                            <ul className="w-full">
                              {child.links.map((child2) => {
                                return (
                                  <li className="w-full" key={child2.title}>
                                    <NavLink
                                      onClick={() => {
                                        setMenu(!menu);
                                        setSubMenu(null);
                                      }}
                                      to={child2.url}
                                      className={({ isActive }) =>
                                        `uppercase leading-[1.6] py-[0.17em] inline-block text-lg ${
                                          isActive
                                            ? "text-[#cd2122]"
                                            : "text-black"
                                        }`
                                      }
                                    >
                                      {child2.title}
                                    </NavLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </>
                        </li>
                      ))}
                    </ul>
                    // mega container ends here
                  )}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
