import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#f1eae9]/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex"><Link to="/" className="text-[#27262c] hover:text-[#a15982]">Home</Link></nav>

        {/* Contact Button */}
        <Button
          className="hidden bg-[#a15982] text-white hover:bg-[#a15982]/90 md:inline-flex"
        >
          CONNECT
        </Button>

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
        <div className="bg-[#f1eae9] p-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            
            
            
            
            
            <Button
              className="mt-2 w-full bg-[#a15982] text-white hover:bg-[#a15982]/90"
            >
              CONNECT
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
