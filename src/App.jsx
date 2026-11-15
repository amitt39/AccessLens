import Navbar from "../src/components/layout/Navbar";
import Hero from "../src/components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhatWeCheck from "./components/sections/WhatWeCheck";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Faq from "./components/sections/Faq";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <WhatWeCheck />
      <WhyChooseUs />
      <Faq />
      <Footer />
    </>
  );
}
