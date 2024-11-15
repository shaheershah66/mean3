import React from "react";
import Portfolio from "../../componets/Portfolio";

export default function Section1() {
  return (
    <div className="w-full Section1 h-[65vh]">
      <Portfolio
        bgImage={"assets/shopify-banner.png"}
        objectPosition={"object-center-center"}
        customer={false}
        altText="Shopify Background Image"
      />
    </div>
  );
}
