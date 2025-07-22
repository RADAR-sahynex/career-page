"use client";
import Image from 'next/image';
import { useState } from 'react';

function HeaderBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Gradient header background */}
      <div className="w-full h-2 bg-header-gradient"></div>
      
      <header className="flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6 !bg-white shadow-md" style={{ backgroundColor: '#ffffff' }}>
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image src="/sahynex_logo.jpeg" alt="" width={100} height={33} className="sm:w-[120px] sm:h-[40px]" />
          <h1 className="hidden sm:block text-lg sm:text-xl font-bold text-primary-red font-primary">CAREERS AT SAHYNEX</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-8">
          <nav className="flex space-x-8">
            <a href="#" className="text-primary-red hover:text-red-700 font-medium font-secondary transition-colors duration-200">Career Home</a>
            <a href="#" className="text-primary-red hover:text-red-700 font-medium font-secondary transition-colors duration-200">Search Jobs</a>
          </nav>
          <button className="bg-primary-red hover:bg-primary-red text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 font-secondary">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button and Sign In */}
        <div className="sm:hidden flex items-center space-x-4">
          <button className="bg-primary-red hover:bg-primary-red text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-secondary">
            Sign In
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-red-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg sm:hidden z-50">
            <nav className="flex flex-col py-4">
              <a href="#" className="px-6 py-3 text-primary-red hover:text-red-700 hover:bg-gray-50 font-medium transition-colors duration-200 font-secondary">
                Career Home
              </a>
              <a href="#" className="px-6 py-3 text-primary-red hover:text-red-700 hover:bg-gray-50 font-medium transition-colors duration-200 font-secondary">
                Search Jobs
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

export default HeaderBar;