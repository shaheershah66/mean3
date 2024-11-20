import "./index.css";

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
      className={`lg:hidden ${
        menu ? "is-active" : "not-active"
      } menu-bar-overlay`}
    >
      <div className="pt-[60px] pb-[50px] text-center block absolute left-0 top-0 w-full h-full overflow-x-hidden">
        {/* Cross Button */}
        <div
          onClick={() => {
            setMenu(!menu); // Toggle menu
            setSubMenu(null); // Reset any sub-menu state
          }}
          className={`${!menu ? "close-btn-not-active" : ""} close-btn`}
        >
          <span className={`${menu ? "line-active" : ""}`}></span>
        </div>
        {/* cross button ends here */}
        <ul className="w-full py-[40px] relative mb-[10px] font-open">
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
              <li
                key={parent.title}
                className={`${menu ? "link-active" : "link-not-active"}`}
              >
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
                        className={`w-full transition-all duration-700 overflow-hidden ease-in-out ${
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
                        className={`w-full transition-all duration-700 ease-in-out overflow-hidden ${
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
    </div>
  );
};

export default MobileMenu;
