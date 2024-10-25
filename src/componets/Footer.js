import { useState } from "react";
import footerJson from "../data/footer.json";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  const [footerData, setFooterData] = useState(footerJson);

  return (
    <div className="Footer w-full bg-[#2F2F2F] text-white p-5">
      <div className="section7-container xl:w-[1170px] mx-auto px-[15px]">
        <div className="footer-top flex w-full">
          <div className="offices w-1/4 px-4">
            <div className="logo-container mb-[30px]">
              <a src="#">
                <img src="mean3-logo.png" width={125} height={125}></img>
              </a>
            </div>
            <div>
              <h5 className="my-2 text-[#d5d5d5]">
                <strong>Usa Office</strong>
              </h5>
              <h5 className="my-2">
                <a href="#">
                  447 Broadway, 2nd Floor Suite #670, New York, New York 10013,
                  United States
                </a>
              </h5>
              <h5 className="-mt-2 mb-2">
                <a href="#">info@mean3.com</a>
              </h5>
              <h5 className="-mt-2 mb-2">
                <a href="#" className="">
                  +1 (832) 278-2928
                </a>
              </h5>
            </div>
            <hr className="my-5"></hr>
            <div>
              <h5 className="my-2 text-[#d5d5d5]">
                <strong>Pak Office</strong>
              </h5>
              <h5 className="my-2">
                <a href="#">
                  2nd floor, 48-B Miran Mohammed Shah Rd, Mohammad Ali Society
                  (Machs), Karachi.
                </a>
              </h5>
              <h5 className="-mt-2 mb-2">
                <a href="#">info@mean3.com</a>
              </h5>
              <h5 className="-mt-2 mb-2">
                <a href="#">+923343257767</a>
              </h5>
              <h5 className="-mt-2 mb-2">
                <a href="#">+923314016473</a>
              </h5>
            </div>
          </div>

          {footerData.map((item, index) => {
            return (
              <div className="links w-1/4 px-4" key={index}>
                <h4 className="mt-2 mb-[30px] text-[#d5d5d5] text-lg capitalize">
                  {item.title}
                </h4>
                <div>
                  <ul>
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.url} className="pb-1 capitalize block">
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          <div className="logos w-1/4 px-4 flex flex-wrap self-start gap-2 mt-5">
            <div className="w-[48%]">
              <img className="bg-white" src="shopify-experts-logo.png"></img>
            </div>

            <div className="w-[48%]">
              <img className="bg-white" src="secp-logo.jpg"></img>
            </div>

            <div className="w-[48%]">
              <img className="bg-white" src="pasha-logo.jpg"></img>
            </div>

            <div className="w-[48%]">
              <img className="bg-white" src="go-awards-logo.png"></img>
            </div>

            <div className="w-[48%]">
              <img className="bg-white" src="brand-of-the-logo.png"></img>
            </div>
          </div>
        </div>

        <div className="footer-bottom px-4 text-[13px]">
          <div className="bg-[#484848] h-[5px] w-full mt-4"></div>
          <div className="w-full flex justify-between py-7">
            <p className="text-[#8b8c8d]">
              © 2024 All rights reserved.{" "}
              <a className="text-white" href="#">
                Mean3 Pvt Ltd
              </a>
            </p>
            <div className="flex items-center">
              <p className="text-[#8b8c8d] mr-1">GET SOCIAL</p>
              <SocialMediaIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
