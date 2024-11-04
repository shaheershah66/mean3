import { useState } from "react";
import servicesJson from "../../data/services.json";

export default function Section3() {
  const [servicesData, setServicesData] = useState(servicesJson);

  return (
    <div className="Section3 w-full py-[35px]">
      <div className="section3-container w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px] text-red-800">
        <div className="py-[35px] text-center">
          <h3 className="mb-2 text-2xl font-bold md:text-4xl">OUR SERVICES</h3>
          <h4 className="mb-2 text-lg text-black">
            Choose just the service you need, or build an all-inclusive package.
          </h4>
        </div>
        <div className="flex flex-wrap gap-5 mx-auto lg:flex-nowrap">
          {servicesData.map((service, index) => {
            return (
              <div
                key={index}
                className="relative hover:z-10 bg-[#eeeeee]  text-center w-full  md:text-left md:w-[48.6%] p-[30px] lg:p-[14px] lg:w-[20%] rounded-md cursor-pointer group transform transition-all duration-300 hover:bg-white hover:shadow-2xl hover:scale-105"
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
                <h3 className="py-[15px] text-[22px] lg:text-base text-black capitalize">
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
                          className="inline-block w-full capitalize text-red-800 py-[10px]"
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
      <div className="w-full h-10 shadow-lg"></div>
    </div>
  );
}
