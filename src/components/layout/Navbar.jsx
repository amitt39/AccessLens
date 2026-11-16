import logo from "../../assets/logo.svg";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#dce7df]/70 bg-[#fdfefd]/80 shadow-[0_4px_20px_rgba(20,32,26,0.06)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2"
          aria-label="AccessLens home"
        >
          <img src={logo} alt="" className="w-14 sm:w-16" />
          <h1 className="text-lg font-bold tracking-tight text-[#14201a] sm:text-xl">
            AccessLens
          </h1>
        </a>

        <a
          href="https://github.com/amitt39/AccessLens"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-black px-4 py-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-md cursor-pointer"
        >
          <FaGithub size={24} />
          Source Code
        </a>
      </div>
    </nav>
  );
}
