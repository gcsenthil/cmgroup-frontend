import React from "react";
import HeroSlider from "./HeroSlider";
import WhatWeDo from "./WhatWeDo";
import AboutUs from "./AboutUs";
import Service from "./Services";
import BlogSection from "./BlogSection";
import TeamSection from "./TeamSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WhatWeDo />
      <AboutUs />
      <Service />
      <TeamSection />
      <BlogSection />
    </>
  );
}
