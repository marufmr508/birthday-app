import Image from 'next/image';
import React from 'react';
import logos from "@/assets/ChatGPT Image Sep 4, 2026, 12_39_35 AM.png";
import Link from 'next/link';
import {
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineGift,
  HiOutlineCamera,
  HiOutlineCake,
  HiOutlineArrowDown,
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineStar,
} from "react-icons/hi";


const HeroSection = () => {
    return (
        <div>
            <section
        id="home"
        className="relative mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl items-center px-6 py-20 lg:px-10"
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Hero Text */}
          <div className="animate-fade-in text-center lg:text-left">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-pink-500 shadow-sm backdrop-blur-md">
              <HiOutlineSparkles className="text-base" />
              A Special Day For Someone Special
            </div>

            <p className="mb-4 text-lg font-semibold text-pink-500">
              শুভ জন্মদিন, Rubat! ♡
            </p>

            <h2 className="text-5xl font-black leading-[1.08] tracking-tight text-[#701a45] sm:text-6xl lg:text-7xl">
              Happy
              <span className="block bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
                Birthday
              </span>
              <span className="mt-2 block text-4xl text-[#9d174d] sm:text-5xl">
                Dear Rubat ✨
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-lg text-base leading-8 text-[#9d5578] lg:mx-0">
              Today is a beautiful reminder of how special you are.
              May your life be filled with endless happiness, love,
              peaceful moments, and unforgettable memories.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">

              <Link
                href="#for-you"
                className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-pink-300/50 transition duration-300 hover:-translate-y-1 hover:shadow-pink-400/60"
              >
                Open Your Surprise
                <HiOutlineGift className="text-xl transition group-hover:rotate-12" />
              </Link>

              <Link
                href="#memories"
                className="flex items-center justify-center gap-2 rounded-full border border-pink-200 bg-white/60 px-7 py-4 text-sm font-bold text-pink-600 backdrop-blur-md transition duration-300 hover:bg-white"
              >
                Explore Memories
                <HiOutlineArrowDown />
              </Link>
            </div>

            {/* Small Stats */}
            <div className="mt-12 flex justify-center gap-8 lg:justify-start">
              <div>
                <h3 className="text-2xl font-black text-pink-600">∞</h3>
                <p className="mt-1 text-xs font-medium text-[#b76b91]">
                  Beautiful Moments
                </p>
              </div>

              <div className="h-12 w-px bg-pink-200" />

              <div>
                <h3 className="text-2xl font-black text-pink-600">1</h3>
                <p className="mt-1 text-xs font-medium text-[#b76b91]">
                  Special Person
                </p>
              </div>

              <div className="h-12 w-px bg-pink-200" />

              <div>
                <h3 className="text-2xl font-black text-pink-600">100%</h3>
                <p className="mt-1 text-xs font-medium text-[#b76b91]">
                  Good Wishes
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-md">

            <div className="absolute -inset-8 rounded-full bg-pink-300/30 blur-3xl" />

            <div className="relative rotate-2 rounded-[2.5rem] border-8 border-white/80 bg-white/40 p-3 shadow-[0_25px_80px_rgba(190,24,93,0.25)] backdrop-blur-md transition duration-500 hover:rotate-0">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src={logos}
                  alt="Special birthday memory"
                  fill
                  priority
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#831843]/50 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-white/25 p-4 text-white backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <HiOutlineHeart className="text-xl text-pink-200" />
                    <p className="text-sm font-bold">
                      You are truly special
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-pink-50">
                    Wishing you a wonderful year ahead.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Labels */}
            <div className="absolute -left-8 top-16 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-14">
              <div className="flex items-center gap-2">
                <HiOutlineCake className="text-xl text-pink-500" />
                <span className="text-xs font-bold text-pink-700">
                  Birthday Vibes
                </span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-5 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-10">
              <div className="flex items-center gap-2">
                <HiOutlineStar className="text-xl text-yellow-500" />
                <span className="text-xs font-bold text-pink-700">
                  Shine Bright
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default   HeroSection;