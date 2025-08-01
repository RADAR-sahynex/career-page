"use client";
import Image from 'next/image';
import { useState } from 'react';

function HeaderBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Gradient header background */}
      <div className="w-full h-2 bg-header-gradient"></div>

      <header className="flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6 bg-white shadow-md relative z-50">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <h1 className="hidden sm:block text-lg sm:text-xl font-bold text-primary-red font-primary">CAREERS AT </h1>
          <Image src="/sahynex_logo.jpeg" alt="Sahynex Logo" width={100} height={33} className="sm:w-[120px] sm:h-[40px]" />
        </div>

        {/* Right: Home Button + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Home Button */}
          <a
            href="#"
            className="text-primary-red hover:text-red-700 font-medium font-secondary border border-primary-red px-4 py-1.5 rounded-md transition duration-200"
          >
            Home
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-red-700 focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Vertical Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg z-40">
          <nav className="flex flex-col py-4">
            <a
              href="#"
              className="px-6 py-3 text-primary-red hover:text-red-700 hover:bg-gray-50 font-medium transition duration-200 font-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Career Home
            </a>
            <a
              href="#"
              className="px-6 py-3 text-primary-red hover:text-red-700 hover:bg-gray-50 font-medium transition duration-200 font-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Search Jobs
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mx-6 my-3 bg-primary-red hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg transition duration-200 font-secondary"
            >
              Sign In
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}

export default HeaderBar;
