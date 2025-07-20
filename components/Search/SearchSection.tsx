"use client";
import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";

export default function SearchSection() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section with Slogan and Images */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side - Slogan */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
                Find Your Dream
                <span className="text-blue-600"> Career</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-2xl">
                Discover amazing opportunities at Sahynex. Join our innovative team 
                and build the future of technology together.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="text-sm font-medium text-gray-700">🚀 Innovation</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="text-sm font-medium text-gray-700">💡 Growth</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="text-sm font-medium text-gray-700">🌟 Excellence</span>
                </div>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Image */}
                <div className="relative w-80 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-10"></div>
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">💼</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Join Our Team</h3>
                      <p className="text-gray-600 px-6">Be part of something amazing</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center animate-bounce">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-400 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                  <span className="text-xl">🎯</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              Search Your Perfect Role
            </h2>
            <p className="text-gray-600 text-center">
              Filter through our open positions to find what matches your skills and passion
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mb-6">
            <SearchBar />
          </div>

          {/* Filter Panel */}
          <FilterPanel />
        </div>
      </div>
    </div>
  );
}
