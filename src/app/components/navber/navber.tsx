 
"use client";

import logo from "@/assets/ChatGPT Image Sep 20, 2026, 04_21_41 PM.png";

import Image from "next/image";
import Link from "next/link";

import {
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineHeart,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto w-[94%] max-w-7xl">
      <nav className="relative rounded-[28px] border border-white/70 bg-white/80 px-4 py-3 shadow-[0_10px_40px_rgba(239,65,96,0.12)] backdrop-blur-xl sm:px-5 md:px-6 lg:px-8">

        {/* Main Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 sm:gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#ef4160]/20 blur-md transition group-hover:bg-[#ef4160]/30" />

              <Image
                src={logo}
                alt="Birthday Girl"
                width={65}
                height={65}
                className="relative h-12 w-12 rounded-full object-cover ring-2 ring-[#ef4160]/20 transition duration-300 group-hover:scale-105 sm:h-14 sm:w-14"
              />
            </div>

            <div className="hidden sm:block">
              <h2 className="whitespace-nowrap text-xl font-bold italic tracking-tight text-[#202c3d] md:text-2xl">
                Birthday Girl
              </h2>

              <p className="mt-0.5 text-center text-[10px] font-bold tracking-[0.25em] text-[#ef4160]">
                ♥ RUBAT ♥
              </p>
            </div>
          </Link>

          {/* Home + Memories */}
          <div className="flex items-center gap-1 sm:gap-2">

            {/* Home */}
            <Link
              href="/"
              className="group flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-[#292d35] transition-all duration-300 hover:bg-[#fff0f3] hover:text-[#ef4160] sm:gap-2 sm:px-4 sm:py-3 md:px-5"
            >
              <HiOutlineHome className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-xl" />
              <span>Home</span>
            </Link>

            {/* Memories */}
            <Link
              href="/memories"
              className="group flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-[#292d35] transition-all duration-300 hover:bg-[#fff0f3] hover:text-[#ef4160] sm:gap-2 sm:px-4 sm:py-3 md:px-5"
            >
              <HiOutlinePhotograph className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-xl" />
              <span>Memories</span>
            </Link>

          </div>

          {/* Desktop For You Button */}
          <Link
            href="/for-you"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#ef4160] to-[#ff6b81] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#ef4160]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#ef4160]/30 sm:flex sm:px-5 sm:py-3 md:px-6"
          >
            <HiOutlineHeart className="text-lg transition-transform duration-300 group-hover:scale-125 sm:text-xl" />
            <span className="hidden sm:inline">For You</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0f3] text-[#ef4160] transition hover:bg-[#ffe3e9] sm:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 sm:hidden ${
            menuOpen
              ? "mt-4 max-h-40 border-t border-[#ef4160]/10 pt-4 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 pb-2">

            <Link
              href="/for-you"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ef4160] to-[#ff6b81] px-5 py-3.5 font-bold text-white shadow-lg shadow-[#ef4160]/20"
            >
              <HiOutlineHeart className="text-xl" />
              For You
            </Link>

          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;

