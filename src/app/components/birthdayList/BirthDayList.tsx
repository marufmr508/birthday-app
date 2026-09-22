 import React from "react";
import BirthDay from "../herosection/birthdsycard/BirthDayCard";
import birthdays from "@/app/data.json";

const BirthDayList = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 px-4 py-12 sm:px-6 lg:px-10">

      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-pink-500">
          Special Memories
        </p>

        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
          Beautiful Birthday Moments 🎂
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
          Every picture holds a beautiful memory. Celebrate these special
          moments and keep them close to your heart.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {birthdays.map((birthday) => (
          <div
            key={birthday.id}
            className="group transition duration-300 hover:-translate-y-2"
          >
            <div className="overflow-hidden rounded-3xl bg-white/80 shadow-md backdrop-blur-sm transition duration-300 group-hover:shadow-2xl">
              <BirthDay birthday={birthday} />
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-2xl text-center">
        <p className="text-sm text-gray-500 sm:text-base">
          ✨ 15 beautiful memories • One very special birthday ✨
        </p>
      </div>

    </section>
  );
};

export default BirthDayList;