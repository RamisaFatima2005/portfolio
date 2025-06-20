"use client"

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <>
      {/* Navbar container */}
      <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Brand */}
            <div className="flex-shrink-0 text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent select-text">
              <Link href="/">Portfolio.</Link>
            </div>
            {/* Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/home" className="hover:text-purple-400 transition-colors duration-300 font-semibold">Home</Link>
              <Link href="/about" className="hover:text-purple-400 transition-colors duration-300 font-semibold">About</Link>
              <Link href="/services" className="hover:text-purple-400 transition-colors duration-300 font-semibold">Services</Link>
              <Link href="/skills" className="hover:text-purple-400 transition-colors duration-300 font-semibold">Skills</Link>
              <Link href="/projects" className="hover:text-purple-400 transition-colors duration-300 font-semibold">Projects</Link>
              <Link href="/contact" className="hover:text-purple-400 transition-colors duration-300 font-semibold">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
