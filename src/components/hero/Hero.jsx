import HeroHeading from "./HeroHeading";
import HeroImageSection from "./HeroImageSection";
import InputSection from "./InputSection";
import Navbar from "../layout/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="relative min-h-[calc(100vh-76px)] scroll-mt-24 bg-[#fdfefd] bg-[radial-gradient(ellipse_at_15%_100%,rgba(190,220,199,0.35),transparent_45%),radial-gradient(ellipse_at_85%_100%,rgba(245,204,180,0.4),transparent_45%)] flex flex-col justify-center items-center mx-auto w-full  px-6 overflow-hidden">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6">
          <HeroHeading />
          <InputSection />
        </div>
        <HeroImageSection />
      </section>
    </>
  );
}
