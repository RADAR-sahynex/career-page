"use client";
import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";

export default function SearchSection() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section with Slogan and Images */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Left Side - Slogan */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
                Find Your Dream
                <span className="text-orange-600"> Career</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0">
                Discover amazing opportunities at Sahynex. Join our innovative team 
                and build the future of technology together.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <div className="bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">🚀 Innovation</span>
                </div>
                <div className="bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">💡 Growth</span>
                </div>
                <div className="bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">🌟 Excellence</span>
                </div>
              </div>
            </div>

          {/* Right Side - Images */}
            <div className="flex-1 flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="relative">
                {/* Main Image */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-10"></div>
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center px-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-xl sm:text-2xl">💼</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Join Our Team</h3>
                      <p className="text-gray-600 px-4 sm:px-6 text-sm sm:text-base">Be part of something amazing</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center animate-bounce">
                  <span className="text-xl sm:text-2xl">⭐</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 bg-green-400 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                  <span className="text-lg sm:text-xl">🎯</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center">
              Search Your Perfect Role
            </h2>
            <p className="text-gray-600 text-center text-sm sm:text-base px-4">
              Filter through our open positions to find what matches your skills and passion
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mb-4 sm:mb-6">
            <SearchBar />
          </div>

          {/* Filter Panel */}
          <FilterPanel />
        </div>
      </div>
    </div>
  );
}
