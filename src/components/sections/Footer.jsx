import logo from "../../assets/logo.svg";
import Container from "../Container";

export default function Footer() {
  return (
    <footer className="border-t border-[#dce7df] bg-[#fdfefd] py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr] sm:gap-16">
          <div>
            <a href="#home" className="inline-flex items-center gap-2">
              <img src={logo} alt="AccessLens" className="w-12" />
              <span className="text-xl font-bold text-[#14201a]">AccessLens</span>
            </a>
            <p className="mt-5 max-w-sm text-base leading-7 text-[#5f6b63]">
              Making the web more accessible, one website at a time.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7b8b81]">
              Explore
            </p>
            <div className="mt-5 grid gap-3 text-sm text-[#14201a]">
              <a className="hover:text-[#1F513D]" href="#home">Home</a>
              <a className="hover:text-[#1F513D]" href="#how-it-works">How It Works</a>
              <a className="hover:text-[#1F513D]" href="#what-we-check">What We Check</a>
              <a className="hover:text-[#1F513D]" href="#about">About</a>
            </div>
          </nav>
        </div>
        <div className="mt-12 border-t border-[#dce7df] pt-6 text-sm text-[#7b8b81]">
          © 2026 AccessLens. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
