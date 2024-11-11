import SocialMediaIcons from "./SocialMediaIcons";

export default function Card() {
  return (
    <div className="absolute hidden md:block top-full font-open left-0 w-[440px] shadow-2xl bg-[#cd2122] z-10  pt-[30px] pb-[25px] px-5 mt-[10px] text-xs leading-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none">
      <div className="flex">
        <div className="w-[44%] px-[15px]">
          <div className="flex flex-col mt-[15px] items-center logo-container">
            <img
              src="assets/mean3-black-logo.png"
              className="w-full h-[150px]"
              alt="Mean3 Black Logo"
            />
            <p className="text-center mt-[20px]">Mean3 Software Solution provider</p>
          </div>
        </div>
        <div className="w-[56%] px-[15px]">
          <p className="mb-5">
            <strong>+1 (832) 278-2928</strong> <br />
            Email: <a href="mailto:info@mean3.com" className="hover:text-[hsla(0,0%,100%,.7)]">info@mean3.com</a>
          </p>
          <p className="mb-5">
            Mean3 Software Solutions <br />
            447 Broadway, 2nd Floor Suite #670, New York, New York 10013, United
            States
          </p>
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
}
