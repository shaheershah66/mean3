import React from "react";
import Portfolio from "../../componets/Portfolio";

export default function Section1() {
  return (
    <div className="w-full h-[65vh] Section1">
      <Portfolio bgImage={"assets/web-banner-About-Us-2.jpg"} objectPosition={"object-center"} customer={false} altText="Contact Us Background Image"/>
    </div>
  );
}
