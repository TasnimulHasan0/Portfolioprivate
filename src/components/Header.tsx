import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-rose-600">Tasnimul Hasan</h1>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-rose-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-rose-600 transition"
          >
            Home
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md backdrop-blur-md bg-white/10 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <a
                  href="#about"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-white/20"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-white/20"
                >
                  Projects
                </a>
                <a
                  href="#connect"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-white/20"
                >
                  Connect
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
