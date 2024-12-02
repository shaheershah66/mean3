import webdevelopmentClientsJson from "../../data/webdevelopmentClients.json";

export default function Section11() {
  const webdevelopmentClientsData = webdevelopmentClientsJson;
  return (
    <div className="w-full text-white bg-black Section11">
      <div className="w-full section11-container">
        <div className="md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px] py-[35px]">
          <h1 className="text-center text-[50px] leading-[40px] my-[0.67em] font-georgia -mb-[15px]">
            WHAT OUR CLIENTS SAY!
          </h1>
        </div>
        <div className="bg-[#050a05]">
          <div className="md:w-[750px] flex flex-wrap justify-center md:gap-x-[50px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px] py-[35px]">
            {webdevelopmentClientsData.map((item) => {
              return (
                <div className="w-full md:w-[calc(50%-50px)] mb-[30px]">
                  <div className="flex w-full">
                    <img
                      className="object-cover w-[110px] h-[110px] inline-block rounded-[50%] border-[5px] border-solid border-[rgba(255,255,255,.2)] mr-[20px] ml-[25px]"
                      src={item.imgUrl}
                    ></img>
                    <div className="w-full">
                      <h4 className="text-base leading-[1.4] font-open font-bold uppercase mt-[12px]">
                        {item.title}
                      </h4>
                      <div>
                        <span className="font-glyphicons opacity-60 text-[9px] relative top-[1px] leading-[1] before:content-['\e006'] inline-block"></span>
                        <span className="font-glyphicons ml-[2px] opacity-60 text-[9px] relative top-[1px] leading-[1] before:content-['\e006'] inline-block"></span>
                        <span className="font-glyphicons ml-[2px] opacity-60 text-[9px] relative top-[1px] leading-[1] before:content-['\e006'] inline-block"></span>
                        <span className="font-glyphicons ml-[2px] opacity-60 text-[9px] relative top-[1px] leading-[1] before:content-['\e006'] inline-block"></span>
                        <span className="font-glyphicons ml-[2px] opacity-60 text-[9px] relative top-[1px] leading-[1] before:content-['\e006'] inline-block"></span>
                      </div>
                    </div>
                  </div>
                  <div className="font-open text-base leading-[1.7] italic p-[12px_25px_40px]">
                    "{item.text}"
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
