import React from "react";
import { Helmet } from "react-helmet";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function GameDesignAndDevelopment() {
  return (
    <div className="GameDesignAndDevelopment">
      <Helmet>
        <title>Game Design & Development - Mean3 Pvt Ltd</title>
      </Helmet>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
