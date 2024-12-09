import servicesJson from "../../data/services.json";

export default function Section3() {
  const servicesData = servicesJson;

  return (
    <div className="Section3 relative w-full pt-[35px] pb-[65px] font-open">
      <div className="section3-container w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px]">
        <div className="py-[35px] text-center">
          <h3 className="mb-2 text-2xl font-bold font-mont md:text-4xl text-[#da2128]">OUR SERVICES</h3>
          <h4 className="mb-2 text-lg text-black">
            Choose just the service you need, or build an all-inclusive package.
          </h4>
        </div>
        <div className="flex flex-wrap gap-5 mx-auto lg:flex-nowrap">
          {servicesData.map((service, index) => {
            return (
              <div
                key={index}
                className="relative hover:z-10 bg-[#eeeeee]  text-center w-full  md:text-left md:w-[48.6%] p-[30px] lg:p-[14px] lg:w-[20%] rounded-md cursor-pointer group transform transition-all duration-300 hover:bg-white hover:shadow-2xl md:hover:scale-105"
              >
                <div className="inline-block text-center logo-container">
                  <img
                    src={service.image}
                    width={63}
                    height={63}
                    alt="Services Logos"
                    className="text-left"
                  />
                </div>
                <h3 className="py-[15px] leading-[1.3] font-[600] text-[22px] lg:text-base text-[#323232] capitalize">
                  {service.title}
                </h3>
                <ul className="absolute left-0 right-0 bg-white z-10 hidden group-hover:block rounded-b-md shadow-lg p-[30px] lg:p-[14px]">
                  {service.links.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className="w-full border-t-[1px] border-solid border-[#eeee] "
                      >
                        <a
                          className="inline-block text-[13px] w-full uppercase text-[#cd2122] py-[10px]"
                          href={link.link}
                        >
                          {link.linkName}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{background: "radial-gradient(ellipse at 50% 0, rgba(0, 0, 0, .3) 0, transparent 70%)"}} className="absolute w-full z-[1] -bottom-[10px] left-0 block h-[10px] opacity-60"></div>
    </div>
  );
}
