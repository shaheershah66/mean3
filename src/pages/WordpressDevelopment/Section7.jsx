import Form from "../../componets/Form";

export default function Section7() {
  return (
    <div id="contact-us-sect" className="w-full Section7">
      <div className="w-full section7-container">
        <div className="mx-auto w-[90%] md:w-[61%] text-center pb-[1%]">
          <h1 className="text-[24px] md:text-[34px] leading-[29px] md:leading-[41px] font-bold text-[#151515] my-[0.67em]">
            Contact Us
          </h1>
          <p className="leading-[20px] text-[#373737] w-full text-base font-open">
            Unlock the Power of WordPress with Us.
          </p>
        </div>
        <div className="w-full py-[35px] px-0 md:px-[15px] mx-auto md:w-[750px] lg:w-[970px] xl:w-[1170px]">
          <Form />
        </div>
      </div>
    </div>
  );
}
