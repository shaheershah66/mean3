import React from "react";
import Portfolio from "../../componets/Portfolio";

export default function Section1() {
  return (
    <div className="w-full h-[70vh] Section1">
      <Portfolio
        bgImage={"assets/bg-image-game-development.jpg"}
        objectPosition={"object-center-top"}
        customer={false}
        altText="Game Design & Development Background Image"
      />
    </div>
  );
}
