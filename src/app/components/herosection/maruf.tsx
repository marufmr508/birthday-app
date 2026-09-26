 import Image from "next/image";
import React from "react";
import logo from "@/assets/maruf.png";

const Maruf = () => {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-10">
      <div className=" bg-linear-to-l from-green-300 to-white  relative mx-auto flex w-full max-w-6xl flex-col items-center overflow-hidden rounded-[2rem] border border-pink-100 bg-white p-6 shadow-[0_20px_60px_rgba(190,24,93,0.08)] sm:p-8 md:flex-row md:gap-8 md:p-10 lg:gap-14 lg:p-14">

        {/* Decorative elements */}

        <div className="pointer-events-none absolute left-6 top-6 text-2xl opacity-20">
          💕
        </div>

        <div className="pointer-events-none absolute right-8 top-8 text-xl opacity-20">
          ✨
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/3 text-xl opacity-15">
          💗
        </div>

        {/* ================= LEFT — TEXT ================= */}

        <div className="relative z-10 flex w-full flex-1 flex-col items-center text-center md:items-start md:text-left">

          {/* Small label */}

          <span className="mb-5 rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-pink-700">
            Just For You ❤️
          </span>

          {/* Heading */}

          <h1 className="max-w-xl font-serif text-3xl font-bold leading-[1.5] tracking-tight text-[#4c0519] sm:text-4xl md:text-4xl lg:text-5xl">

            তুমি দূরে দূরে
            <span className="block bg-gradient-to-r from-pink-600 via-rose-500 to-red-500 bg-clip-text text-transparent">
              আর থেকো না
            </span>

            <span className="mt-2 block text-2xl font-medium text-[#4c0519] sm:text-3xl lg:text-4xl">
              এ চোখে চেয়ে দেখো না
            </span>

             

            <span className="block text-2xl font-medium text-[#4c0519] sm:text-3xl lg:text-4xl">
              আজ তোমায় আমি এনে দেবো জোছনা
            </span>

            <span className="mt-2 block text-2xl font-medium text-[#4c0519] sm:text-3xl lg:text-4xl">
              তুমি কাছে এসে আমার পাশে বসো না ❤️
            </span>

          </h1>

          {/* Divider */}

          <div className="my-6 flex items-center gap-3">
            <div className="h-px w-10 bg-pink-200" />
            <span className="text-sm text-pink-500">♥</span>
            <div className="h-px w-10 bg-pink-200" />
          </div>

          {/* Paragraph */}

          <p className="max-w-lg text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
            
          </p>

          {/* Quote */}

          <p className="mt-6 font-serif text-sm italic text-pink-600 sm:text-base">
            “Come a little closer, and let me make this moment beautiful.”
          </p>

        </div>

        {/* ================= RIGHT — IMAGE ================= */}

        <div className="relative mt-8 flex w-full flex-1 justify-center md:mt-0">

          {/* Soft glow */}

          <div className="absolute inset-8 rounded-full bg-pink-200/30 blur-3xl" />

          {/* Image card */}

          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[1.5rem] border border-pink-100 bg-pink-50 p-2 shadow-[0_15px_40px_rgba(190,24,93,0.12)] sm:rounded-[2rem]">

            <Image
              src={logo}
              alt="Maruf"
              width={500}
              height={316}
              priority
              className="h-auto w-full rounded-[1.25rem] object-cover transition-transform duration-500 hover:scale-[1.02]"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Maruf;