import Portfolio from "../../componets/Portfolio";

export default function Section1() {
  return (
    <div className="w-full h-[65vh] Section1">
      <Portfolio
        bgImage={"assets/computer-banner-web-development.jpg"}
        objectPosition={"center-center"}
        customer={false}
        altText="Computer Background Image"
      />
    </div>
  );
}
