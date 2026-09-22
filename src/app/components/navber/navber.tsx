 "use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMusicNote, HiOutlinePause } from "react-icons/hi";

import logo from "@/assets/ChatGPT Image Sep 20, 2026, 04_21_41 PM.png";

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music/birthday.mp3");
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="w-full border-b border-pink-100 bg-white/80 px-4 py-3 shadow-md backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">

          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl border-2 border-pink-200">
              <Image
                src={logo}
                alt="Birthday logo"
                fill
                className="object-cover"
              />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-black text-[#831843]">
                Rubat<span className="text-pink-500"> ♡</span>
              </h1>

              <p className="text-[9px] font-semibold uppercase tracking-widest text-pink-400">
                Special Day
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-3 sm:gap-6">

            <Link
              href="/"
              className="text-xs font-semibold text-[#831843] hover:text-pink-500 sm:text-sm"
            >
              Home
            </Link>

            <Link
              href="/Memoryies"
              className="text-xs font-semibold text-[#831843] hover:text-pink-500 sm:text-sm"
            >
              Memories
            </Link>

            {/* Music Button */}
            <button
              onClick={handleMusic}
              className="flex items-center gap-1.5 rounded-full bg-pink-500 px-3 py-2 text-xs font-bold text-white shadow-md transition hover:bg-pink-600 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
            > 
              {isPlaying ? (
                <HiOutlinePause className="text-base sm:text-lg" />
              ) : (
                <HiOutlineMusicNote className="text-base sm:text-lg" />
              )}

              {isPlaying ? "Pause" : "One Music For You"}
            </button>

          </div>
        </div>
      </nav>
    </header>
  );
}