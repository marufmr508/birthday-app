 import React from "react";
import Image from "next/image";
import logo from "@/assets/rubat.png";

export const BabuDudu = () => {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-10 bg-linear-to-r from-pink-500 to-white rounded-2xl mt-10">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center overflow-hidden rounded-[2rem] border border-pink-100   p-0 shadow-[0_20px_60px_rgba(190,24,93,0.08)] sm:p-8 md:flex-row md:gap-8 md:p-10 lg:gap-14 lg:p-14">

        {/* Decorative hearts */}

        <div className="pointer-events-none absolute left-5 top-5 text-2xl opacity-20">
          💗
        </div>

        <div className="pointer-events-none absolute right-6 top-8 text-xl opacity-20">
          ✨
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/3 text-xl opacity-15">
          💕
        </div>

        {/* ================= LEFT — TEXT ================= */}

        <div className="relative z-10 flex w-full flex-1 flex-col items-center p-6 text-center md:items-start md:p-0 md:text-left">

          {/* Small label */}

          <span className="mb-4 rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-pink-700 uppercase">
            For You ❤️
          </span>

          {/* Heading */}

          <h1 className="max-w-xl font-serif text-3xl font-bold leading-[1.45] tracking-tight text-[#4c0519] sm:text-4xl md:text-4xl lg:text-5xl">
            তোমার প্রেমে আমি

            <span className="block bg-gradient-to-r from-pink-600 via-rose-500 to-red-500 bg-clip-text text-transparent">
              প্রজাপতি হবো
            </span>

            <span className="mt-2 block text-2xl font-medium text-[#4c0519] sm:text-3xl lg:text-4xl">
              ফুলে ফুলে উড়ে
            </span>

            <span className="block text-2xl font-medium text-[#4c0519] sm:text-3xl lg:text-4xl">
              ভালোবাসার কথা কবো ❤️
            </span>
          </h1>

          {/* Divider */}

          <div className="my-6 flex items-center gap-3">
            <div className="h-px w-10 bg-pink-200" />

            <span className="text-sm text-pink-500">
              ♥
            </span>

            <div className="h-px w-10 bg-pink-200" />
          </div>

          {/* Paragraph */}

          <p className="max-w-lg text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
            “If I could choose one person to find in every lifetime, I would
            choose you every time.”
          </p>

        </div>

        {/* ================= RIGHT — IMAGE ================= */}

        <div className="relative flex w-full flex-1 justify-center md:mt-0">

          {/* Image glow */}

          <div className="absolute inset-8 rounded-full bg-pink-200/30 blur-3xl" />

          {/* Image container */}

          <div className="relative z-10 w-full overflow-hidden rounded-none border border-pink-100 bg-pink-50 p-2 shadow-[0_15px_40px_rgba(190,24,93,0.12)] sm:rounded-[2rem]">

            <Image
              src={logo}
              alt="Rubat"
              width={800}
              height={516}
              priority
              className="h-full w-full rounded-[1.25rem] object-cover transition-transform duration-500 hover:scale-[1.02]"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default BabuDudu;