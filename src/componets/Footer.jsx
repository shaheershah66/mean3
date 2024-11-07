import footerJson from "../data/footer.json";
import SocialMediaIcons from "./SocialMediaIcons";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerData = footerJson;

  return (
    <div className="Footer w-full bg-[#2F2F2F] text-white py-5">
      <div className="section7-container w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px]">
        <div className="flex flex-col w-full md:flex-row footer-top">
          <div className="w-full md:px-4 md:w-1/4 offices">
            <div className="logo-container mb-[30px]">
              <Link to="#">
                <img src="assets/mean3-logo.png" width={125} height={125} alt="Mean3 Logo"></img>
              </Link>
            </div>
            <div>
              <h5 className="my-2 text-[#d5d5d5]">
                <strong>Usa Office</strong>
              </h5>
              <h5 className="my-2">
                <Link to="#">
                  447 Broadway, 2nd Floor Suite #670, New York, New York 10013,
                  United States
                </Link>
              </h5>
              <h5 className="mb-2 -mt-2">
                <Link to="#">info@mean3.com</Link>
              </h5>
              <h5 className="mb-2 -mt-2">
                <Link to="#">
                  +1 (832) 278-2928
                </Link>
              </h5>
            </div>
            <hr className="my-5"></hr>
            <div>
              <h5 className="my-2 text-[#d5d5d5]">
                <strong>Pak Office</strong>
              </h5>
              <h5 className="my-2">
                <Link to="#">
                  2nd floor, 48-B Miran Mohammed Shah Rd, Mohammad Ali Society
                  (Machs), Karachi.
                </Link>
              </h5>
              <h5 className="mb-2 -mt-2">
                <Link to="#">info@mean3.com</Link>
              </h5>
              <h5 className="mb-2 -mt-2">
                <Link to="#">+923343257767</Link>
              </h5>
              <h5 className="mb-2 -mt-2">
                <Link to="#">+923314016473</Link>
              </h5>
            </div>
          </div>

          {footerData.map((item, index) => {
            return (
              <div className="w-full md:px-4 md:w-1/4 links" key={index}>
                <h4 className="mt-2 mb-[30px] text-[#d5d5d5] text-lg capitalize">
                  {item.title}
                </h4>
                <div>
                  <ul>
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link to={link.url} className="block pb-1 capitalize">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          <div className="w-full mt-5 md:px-4 md:w-1/4 logos">
            <div className="flex w-full gap-2 mt-2">
              <div className="w-[18%] md:w-[47%] lg:w-[48%]">
                <img className="w-full text-black bg-white" src="assets/shopify-experts-logo.png" alt="Achivements Logos"></img>
              </div>

              <div className="w-[18%] md:w-[47%] lg:w-[48%]">
                <img className="w-full text-black bg-white" src="assets/secp-logo.jpg" alt="Achivements Logos"></img>
              </div>
            </div>

            <div className="flex gap-2 mt-2">
              <div className="w-[18%] md:w-[47%] lg:w-[48%]">
                <img className="w-full text-black bg-white" src="assets/pasha-logo.jpg" alt="Achivements Logos"></img>
              </div>

              <div className="w-[18%] md:w-[47%] lg:w-[48%]">
                <img className="w-full text-black bg-white" src="assets/go-awards-logo.png" alt="Achivements Logos"></img>
              </div>
            </div>
           
            <div className="flex gap-2 mt-2">
              <div className="w-[18%] md:w-[47%] lg:w-[48%]">
                <img className="w-full text-black bg-white" src="assets/brand-of-the-logo.png" alt="Achivements Logos"></img>
              </div>
              <div className="w-[18%] md:w-[47%] lg:w-[48%]">
                <img className="invisible w-full text-black bg-white" src="assets/brand-of-the-logo.png" alt="Achivements Logos"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom w-full md:px-4 text-[13px]">
          <div className="bg-[#484848] h-[5px] w-full mt-[28px]"></div>
          <div className="flex flex-col-reverse w-full md:justify-between md:flex-row py-7">
            <p className="text-[#8b8c8d] md:mt-0 mt-5">
              © 2024 All rights reserved.{" "}
              <Link className="text-white" to="/">
                Mean3 Pvt Ltd
              </Link>
            </p>
            <div className="flex items-center">
              <p className="text-[#8b8c8d] mr-2">GET SOCIAL</p>
              <SocialMediaIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
