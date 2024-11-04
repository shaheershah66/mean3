import React from "react";
import Portfolio from "../../componets/Portfolio";

export default function Section1() {
  return (
    <div className="w-full h-[65vh] Section1">
      <Portfolio bgImage={"/assets/web-banner-our-clients-2-1.jpg"} objectPosition={"object-center"} customer={true} altText="Clients Background Image"/>
    </div>
  );
}
