import { Helmet } from "react-helmet";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

export default function MobileAppDevelopment() {
  return (
    <div className="MobileAppDevelopment">
      <Helmet>
        <title>Mobile Application Development - Mean3 Software Solutions</title>
      </Helmet>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
