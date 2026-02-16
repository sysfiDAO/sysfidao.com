import Hero from "../components/sections/Hero";
import Partners from "../components/sections/Partners";
import FeaturesOverview from "../components/sections/FeaturesOverview";
import AppShowcase from "../components/sections/AppShowcase";
import HowItWorks from "../components/sections/HowItWorks";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import HeroSection from "../components/sections/Hero2";
import FeaturesCardSection from "../components/sections/FeaturesCard";
import AboutSection from "../components/sections/AboutSection";
import WhatMakesUpSysfi from "../components/sections/WhatMakesUpSysfi";
import Roadmap from "./Roadmap";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Partners />
      <AboutSection />
      <FeaturesCardSection />
      <Hero />
      {/* <FeaturesOverview /> */}
      <WhatMakesUpSysfi />
      <Roadmap />
      {/* <HowItWorks /> */}
      {/* <Stats /> */}
      {/* <Testimonials /> */}
      <CTA />
    </>
  );
};

export default Home;
