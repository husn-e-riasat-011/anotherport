import HeroSection from "./herosection/page";
import Navbarcomponent from "@/app/navbar/page";
import AboutSection from "./about/about";
import Allprojects from "./projects/page";

import Services from "./services/page";
import OurServices from "./ourServices/page";
import FooterComponent from "./footer/page";

export default function Home() {
  return (
    <>
      <Navbarcomponent />
      <HeroSection />
      <Services />
      <AboutSection />
      <Allprojects />
      <OurServices />
      <FooterComponent />
    </>
  );
}
