import { Helmet } from "react-helmet";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";

export default function Shopify({plus}) {
  return (
    <div className="Shopify">
      <Helmet>
        <title>{plus ? "Shopify Plus" : "Shopify"} - Mean3 Software Solutions</title>
      </Helmet>
      <Section1 />
      <Section2 plus={plus} />
      <Section3 />
      <Section4 />
      <Section5 plus={plus}/>
      <Section6 plus={plus}/>
      <Section7 />
      <Section8 />
      <Section9 plus={plus}/>
      <Section10 />
    </div>
  );
}
