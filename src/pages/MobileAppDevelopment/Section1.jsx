import React from "react";
import Portfolio from "../../componets/Portfolio";

export default function Section1() {
  return (
    <div className="w-full h-[70vh] Section1">
      <Portfolio
        bgImage={"assets/bg-image-mobile-app.jpg"}
        objectPosition={"object-center-center"}
        customer={false}
        altText="Mobile App Background Image"
      />
    </div>
  );
}
