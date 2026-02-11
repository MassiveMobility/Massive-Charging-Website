import HomeHero from "./Home_Hero";
import Home_SectionB from "./Home_SectionB";
import Home_SectionC_AppOrbit from "./Home_SectionC_AppOrbit";
import Home_SectionA_LeftRight from "./Home_SectionD_Business.tsx";
import Home_SectionE_Education from "./Home_SectionE_Education";
import Home_SectionF_VIPTicket from "./Home_SectionF_VIPTicket";




export default function Home_Page() {
  return (
    <div className="bg-white min-h-screen">
      <HomeHero />
      <Home_SectionB />
      <Home_SectionC_AppOrbit />
      <Home_SectionA_LeftRight/>
      <Home_SectionE_Education />
      <Home_SectionF_VIPTicket />

    </div>
  );
}
