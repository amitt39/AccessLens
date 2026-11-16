import dashboard from "../../assets/accesslens-dashboard.svg";

export default function HeroImageSection() {
  return (
    <>
      <p className="mt-4 max-w-2xl px-4 text-center text-xs leading-6 text-[#5f6b63] sm:text-sm">
        Free to use · No account required · Get actionable accessibility
        insights
      </p>
      <div className="relative mx-auto mt-6 h-105 w-full max-w-5xl overflow-hidden">
        <img
          src={dashboard}
          alt="AccessLens dashboard preview"
          className="block h-auto w-full opacity-80"
        />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-[#fdfefd]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-64 bg-linear-to-b from-transparent via-[#fdfefd]/75 to-[#fdfefd]" />
    </>
  );
}
