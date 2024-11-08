import React from "react";
import { Helmet } from "react-helmet";
import Section1 from "./Section1";
import Section2 from "./Section2";

export default function Clients() {
  return (
    <div className="Clients">
       <Helmet>
        <title>Clients - Mean3 Software Solutions</title>
      </Helmet>
      <Section1 />
      <Section2 />
    </div>
  );
}
