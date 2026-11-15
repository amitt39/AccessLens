import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#dce7df]/70 bg-[#fdfefd]/80 shadow-[0_4px_20px_rgba(20,32,26,0.06)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <a href="#home" className="flex items-center gap-2" aria-label="AccessLens home">
          <img src={logo} alt="" className="w-14 sm:w-16" />
          <h1 className="text-lg font-bold tracking-tight text-[#14201a] sm:text-xl">
            AccessLens
          </h1>
        </a>

        <div className="flex max-w-[62%] items-center gap-4 overflow-x-auto whitespace-nowrap text-xs text-[#14201a] [scrollbar-width:none] sm:max-w-none sm:gap-6 sm:text-sm [&::-webkit-scrollbar]:hidden">
          <a
            href="#home"
            className="transition-colors hover:text-[#1F513D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F513D]"
          >
            Home
          </a>
          <a
            href="#how-it-works"
            className="transition-colors hover:text-[#1F513D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F513D]"
          >
            How it works
          </a>
          <a
            href="#what-we-check"
            className="transition-colors hover:text-[#1F513D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F513D]"
          >
            What we check
          </a>
          <a
            href="#faq"
            className="transition-colors hover:text-[#1F513D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F513D]"
          >
            FAQ
          </a>
          <a
            href="#about"
            className="transition-colors hover:text-[#1F513D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F513D]"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
