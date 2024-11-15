import { useState } from "react";

export default function Section8() {
  const [isOpen, setIsOpen] = useState(new Array(5).fill(false));
  const handleFaq = (index) => {
    setIsOpen((prevState) =>
      prevState.map((item, idx) => (idx === index ? !item : false))
    );
  };

  return (
    <div className="w-full Section8 mt-[4%]">
      <div className="w-full section8-container">
        <div className="w-[61%] pb-[1%] mx-auto text-center">
          <h1 className="leading-[41px] text-[34px] text-[#151515] font-bold my-[0.67em]">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="w-[784px] p-[2%] mx-auto faq-container font-open leading-[21px]">
          
          <div
            className="faq-item rounded-[8px] p-[2%] border border-solid border-[#DEDEDE] mb-[4%]"
            style={{
              background:
                "linear-gradient(0deg, #FEFFFF, #FEFFFF), linear-gradient(0deg, #DEDEDE, #DEDEDE)",
            }}
          >
            <div
              onClick={() => handleFaq(0)}
              className="question text-[#444444] cursor-pointer flex justify-between items-center"
            >
              What is Shopify and how does it work?
              <b className="text-[40px] text-[#DA2128] font-[300]">+</b>
            </div>
            <div
              className={`${
                isOpen[0] ? "block" : "hidden"
              } answer text-[#444444]`}
            >
              <br></br>
              <p className="mb-5">
                Shopify is a complete commerce platform that lets you start,
                grow, and manage a business.
              </p>
              <p className="mb-5">Create and customize an online store</p>
              <p className="mb-5">
                Sell in multiple places, including web, mobile, social media,
                online marketplaces, brick-and-mortar locations, and pop-up
                shops
              </p>
              <p className="mb-5 text-[#E42E35]">
                <a
                  href="https://help.shopify.com/en/manual/products"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Manage products
                </a>
                ,{" "}
                <a
                  href="https://help.shopify.com/en/manual/products/inventory"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  inventory
                </a>
                ,{" "}
                <a
                  href="https://help.shopify.com/en/manual/payments"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  payments
                </a>
                ,{" "}
                <a
                  href="https://help.shopify.com/en/manual/fulfillment/setup/index"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  shipping
                </a>
              </p>
              <p className="mb-5">
                Shopify is completely cloud-based and{" "}
                <a
                  href="https://www.shopify.com/blog/ecommerce-software#web-hosting"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  hosted
                </a>
                , which means you don’t have to worry about upgrading or
                maintaining software or web servers. This gives you the
                flexibility to access and run your business from anywhere with
                an internet connection.
              </p>
            </div>
          </div>

          <div
            className="faq-item rounded-[8px] p-[2%] border border-solid border-[#DEDEDE] mb-[4%]"
            style={{
              background:
                "linear-gradient(0deg, #FEFFFF, #FEFFFF), linear-gradient(0deg, #DEDEDE, #DEDEDE)",
            }}
          >
            <div
              onClick={() => handleFaq(1)}
              className="question text-[#444444] cursor-pointer flex justify-between items-center"
            >
              How much does Shopify cost?
              <b className="text-[40px] text-[#DA2128] font-[300]">+</b>
            </div>
            <div
              className={` ${
                isOpen[1] ? "block" : "hidden"
              } answer text-[#444444]`}
            >
              <br></br>
              <p className="mb-5">
                <a
                  href="https://accounts.shopify.com/store-create"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Try Shopify free for 3 days
                </a>
                , no credit card required.
              </p>
              <p className="mb-5">
                After your trial expires, choose a{" "}
                <a
                  href="https://www.shopify.com/pricing"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  pricing plan
                </a>{" "}
                that suits the size and stage of your business.
              </p>
            </div>
          </div>

          <div
            className="faq-item rounded-[8px] p-[2%] border border-solid border-[#DEDEDE] mb-[4%]"
            style={{
              background:
                "linear-gradient(0deg, #FEFFFF, #FEFFFF), linear-gradient(0deg, #DEDEDE, #DEDEDE)",
            }}
          >
            <div
              onClick={() => handleFaq(2)}
              className="question text-[#444444] cursor-pointer flex justify-between items-center"
            >
              Can I use my own domain name with Shopify?
              <b className="text-[40px] text-[#DA2128] font-[300]">+</b>
            </div>
            <div
              className={` ${
                isOpen[2] ? "block" : "hidden"
              } answer text-[#444444]`}
            >
              <br></br>
              <p className="mb-5">
                Yes, you can use your own domain name with Shopify.
              </p>
              <p className="mb-5">
                If you have an existing domain name, you can connect it to
                Shopify from your store’s admin. Learn more about{" "}
                <a
                  href="https://help.shopify.com/en/manual/domains/add-a-domain"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  connecting an existing domain to a Shopify store.
                </a>
              </p>
              <p className="mb-5">
                If you don’t have a domain name yet, you can either{" "}
                <a
                  href="https://help.shopify.com/en/manual/domains/add-a-domain/buying-domains"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  buy one through Shopify
                </a>{" "}
                or a third-party provider.
              </p>
            </div>
          </div>

          <div
            className="faq-item rounded-[8px] p-[2%] border border-solid border-[#DEDEDE] mb-[4%]"
            style={{
              background:
                "linear-gradient(0deg, #FEFFFF, #FEFFFF), linear-gradient(0deg, #DEDEDE, #DEDEDE)",
            }}
          >
            <div
              onClick={() => handleFaq(3)}
              className="question text-[#444444] cursor-pointer flex justify-between items-center"
            >
              In what countries can I use Shopify?
              <b className="text-[40px] text-[#DA2128] font-[300]">+</b>
            </div>
            <div
              className={` ${
                isOpen[3] ? "block" : "hidden"
              } answer text-[#444444]`}
            >
              <br></br>
              <p className="mb-5">
                You can use Shopify in nearly every country in the world.
              </p>
            </div>
          </div>

          <div
            className="faq-item rounded-[8px] p-[2%] border border-solid border-[#DEDEDE] mb-[4%]"
            style={{
              background:
                "linear-gradient(0deg, #FEFFFF, #FEFFFF), linear-gradient(0deg, #DEDEDE, #DEDEDE)",
            }}
          >
            <div
              onClick={() => handleFaq(4)}
              className="question text-[#444444] cursor-pointer flex justify-between items-center"
            >
              Which languages does Shopify support?
              <b className="text-[40px] text-[#DA2128] font-[300]">+</b>
            </div>
            <div
              className={` ${
                isOpen[4] ? "block" : "hidden"
              } answer text-[#444444]`}
            >
              <br></br>
              <p className="mb-5">
                The customer-facing parts of your Shopify store, including
                ecommerce website, blog, checkout, and emails can be in any
                language if the theme supports it. Learn more and explore our
                themes.
              </p>
              <p className="mb-5">
                The admin of your Shopify store is currently available in
                English, Chinese (Simplified), Chinese (Traditional), Czech,
                Danish, Dutch, Finnish, French, German, Italian, Japanese,
                Korean, Norwegian, Polish, Portuguese (Brazil), Portuguese
                (Portugal), Spanish, Swedish, Thai, and Turkish.
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="line mb-[4%] mt-[1%] mx-auto w-[61%] shadow-line h-2 rounded-full"></div>
    </div>
  );
}
