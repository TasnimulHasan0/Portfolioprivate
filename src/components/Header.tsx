import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#f1eae9]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-[#27262c]">
            Tasnimuls Web
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-[#27262c] font-medium">
          <a
            href="/"
            className="hover:text-[#a15982] transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-[#a15982] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-[#a15982] transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#27262c]"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-[#f1eae9]/80 backdrop-blur-md p-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <a
              href="/"
              className="block w-full rounded bg-[#a15982] px-4 py-2 text-white text-center hover:bg-[#a15982]/90"
            >
              Home
            </a>
            <a
              href="/about"
              className="block w-full rounded bg-[#a15982] px-4 py-2 text-white text-center hover:bg-[#a15982]/90"
            >
              About
            </a>
            <a
              href="/contact"
              className="block w-full rounded bg-[#a15982] px-4 py-2 text-white text-center hover:bg-[#a15982]/90"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
