import Home_SectionD_Business from "./Home_SectionD_Business";
import SecondScroll from "../FrontPage/SecondScroll";
import ThirdScroll from "../FrontPage/ThirdScroll";
import FifthScroll from "../FrontPage/FifthScroll";
import SixthScroll from "../FrontPage/SixthScroll";

export default function Home_Page() {
  return (
    <div className="bg-white min-h-screen">
      <SecondScroll />
      <ThirdScroll />
      <Home_SectionD_Business />
      <FifthScroll />
      <SixthScroll />
    </div>
  );
}
