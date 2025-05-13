import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#f1eae9]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-[#27262c]">
            Tasnimuls Web
          </a>
        </div>

        {/* Hamburger Menu Button — always visible */}
        <button
          className="p-2"
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

      {/* Dropdown Menu - same for all screens */}
      {isMenuOpen && (
        <div className="bg-[#f1eae9]/80 backdrop-blur-md p-4 absolute right-4 top-16 w-48 rounded shadow-lg md:w-60">
          <nav className="flex flex-col space-y-4">
            <Button
              className="bg-[#a15982] text-white hover:bg-[#a15982]/90 w-full"
              onClick={() => window.location.reload()}
            >
              Home
            </Button>
            {/* Add more menu items if needed */}
          </nav>
        </div>
      )}
    </header>
  );
}
