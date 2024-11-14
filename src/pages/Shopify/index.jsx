import { Helmet } from "react-helmet";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

export default function Shopify() {
  return (
    <div className="Shopify">
      <Helmet>
        <title>Shopify - Mean3 Software Solutions</title>
      </Helmet>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}
