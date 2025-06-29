"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icon package

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex-shrink-0 text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent select-text">
            <Link href="/">Portfolio.</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/home" className="hover:text-purple-400 font-semibold">Home</Link>
            <Link href="/about" className="hover:text-purple-400 font-semibold">About</Link>
            <Link href="/services" className="hover:text-purple-400 font-semibold">Services</Link>
            <Link href="/skills" className="hover:text-purple-400 font-semibold">Skills</Link>
            <Link href="/projects" className="hover:text-purple-400 font-semibold">Projects</Link>
            <Link href="/contact" className="hover:text-purple-400 font-semibold">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <Link href="/home" className="block hover:text-purple-400 font-semibold">Home</Link>
            <Link href="/about" className="block hover:text-purple-400 font-semibold">About</Link>
            <Link href="/services" className="block hover:text-purple-400 font-semibold">Services</Link>
            <Link href="/skills" className="block hover:text-purple-400 font-semibold">Skills</Link>
            <Link href="/projects" className="block hover:text-purple-400 font-semibold">Projects</Link>
            <Link href="/contact" className="block hover:text-purple-400 font-semibold">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
