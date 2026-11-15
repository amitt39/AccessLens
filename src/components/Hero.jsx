import dashboard from "../assets/accesslens-dashboard.svg";
import LaoutTextFlip from "../components/ui/LayoutTextFlip";
import { Globe } from "lucide-react";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-76px)] scroll-mt-24 bg-[#fdfefd] bg-[radial-gradient(ellipse_at_15%_100%,rgba(190,220,199,0.35),transparent_45%),radial-gradient(ellipse_at_85%_100%,rgba(245,204,180,0.4),transparent_45%)] flex flex-col justify-center items-center">
      <Container>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6">
          <div className="flex flex-col items-center">
            <LaoutTextFlip />
            <p className="text-[#5f6b63] text-[20px] font-md max-w-2xl text-center mt-10">
              Find accessibility issues on your website and get actionable
              suggestions to make it more inclusive.
            </p>
          </div>
          <div className="mt-4 flex w-full max-w-2xl gap-2">
            <div className="relative flex-1">
              <Globe className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                id="website-url"
                type="text"
                className="w-full rounded-xl border border-[#14201a] py-3 pl-12 pr-4"
                placeholder="Enter your website URL..."
              />
            </div>

            <button
              className="rounded-xl border border-black bg-linear-to-b from-[#26352e] to-[#14201a] px-6 py-3 font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_10px_rgba(20,32,26,0.35)]transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_6px_16px_rgba(20,32,26,0.45)] active:translate-y-0 active:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14201a] cursor-pointer
  "
            >
              Scan Website
            </button>
          </div>
          <p className="mt-4 max-w-2xl px-4 text-center text-xs leading-6 text-[#5f6b63] sm:text-sm">
            Free to use · No account required · Get actionable accessibility
            insights
          </p>
        </div>
        <div className="relative mx-auto mt-6 h-[420px] w-full max-w-5xl overflow-hidden">
          <img
            src={dashboard}
            alt="AccessLens dashboard preview"
            className="block h-auto w-full opacity-80"
          />

          <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-[#fdfefd]" />
        </div>
      </Container>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-64 bg-linear-to-b from-transparent via-[#fdfefd]/75 to-[#fdfefd]" />
    </section>
  );
}
