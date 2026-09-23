 import Image from "next/image";
import Link from "next/link";

import {
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineGift,
  HiOutlineCake,
  HiOutlineArrowDown,
} from "react-icons/hi";

import logos from "@/assets/ChatGPT Image Sep 4, 2026, 12_39_35 AM.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#4c0519] text-white"
    >
      {/* =====================================================
          STRAWBERRY 3D BACKGROUND
      ====================================================== */}

      {/* Base strawberry gradient */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,#fecdd3_0%,#fb7185_18%,#f43f5e_38%,#e11d48_58%,#9f1239_78%,#4c0519_100%)]" />

      {/* Huge 3D light */}

      <div className="absolute left-[55%] top-[35%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/30 blur-[100px]" />

      {/* Secondary depth glow */}

      <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-rose-300/20 blur-[120px]" />

      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-400/20 blur-[120px]" />

      {/* =====================================================
          3D FLOATING GLASS SPHERES
      ====================================================== */}

      <div className="absolute left-[5%] top-[18%] h-32 w-32 animate-bounce rounded-full border border-white/20 bg-gradient-to-br from-white/30 via-pink-300/10 to-red-500/20 shadow-[inset_-20px_-20px_40px_rgba(159,18,57,0.3),0_0_80px_rgba(253,164,175,0.4)] backdrop-blur-md [animation-duration:8s]" />

      <div className="absolute right-[8%] top-[12%] h-44 w-44 animate-bounce rounded-full border border-white/20 bg-gradient-to-br from-white/25 via-rose-300/10 to-red-600/20 shadow-[inset_-30px_-30px_50px_rgba(136,19,55,0.35),0_0_100px_rgba(251,113,133,0.5)] backdrop-blur-md [animation-duration:10s]" />

      <div className="absolute bottom-[10%] left-[12%] h-24 w-24 animate-bounce rounded-full border border-white/20 bg-gradient-to-br from-white/30 to-pink-400/10 shadow-[0_0_70px_rgba(253,164,175,0.5)] backdrop-blur-md [animation-duration:7s]" />

      <div className="absolute bottom-[15%] right-[20%] h-20 w-20 animate-bounce rounded-full border border-white/20 bg-white/10 shadow-[0_0_60px_rgba(251,113,133,0.6)] backdrop-blur-md [animation-duration:6s]" />

      {/* =====================================================
          3D GLASS ORBS — SMALL
      ====================================================== */}

      <div className="absolute left-[20%] top-[55%] h-10 w-10 animate-pulse rounded-full border border-white/30 bg-white/20 shadow-[inset_-8px_-8px_15px_rgba(136,19,55,0.3),0_0_30px_rgba(255,255,255,0.3)] backdrop-blur-md" />

      <div className="absolute right-[35%] top-[18%] h-8 w-8 animate-pulse rounded-full border border-white/30 bg-white/20 shadow-[0_0_30px_rgba(255,255,255,0.4)] backdrop-blur-md" />

      <div className="absolute bottom-[25%] right-[8%] h-12 w-12 animate-pulse rounded-full border border-white/30 bg-white/20 shadow-[0_0_40px_rgba(255,255,255,0.4)] backdrop-blur-md" />

      {/* =====================================================
          FLOATING HEARTS
      ====================================================== */}

      <div className="absolute left-[12%] top-[40%] animate-bounce text-5xl text-pink-100/70 drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] [animation-duration:6s]">
        ♥
      </div>

      <div className="absolute left-[30%] top-[12%] animate-bounce text-3xl text-white/70 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] [animation-duration:7s]">
        ♥
      </div>

      <div className="absolute right-[32%] top-[25%] animate-bounce text-4xl text-pink-100/80 drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] [animation-duration:5s]">
        ♥
      </div>

      <div className="absolute right-[7%] top-[52%] animate-bounce text-6xl text-white/60 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] [animation-duration:8s]">
        ♥
      </div>

      <div className="absolute bottom-[22%] right-[35%] animate-bounce text-2xl text-pink-100/70 [animation-duration:6s]">
        ♥
      </div>

      {/* =====================================================
          SPARKLES
      ====================================================== */}

      <HiOutlineSparkles className="absolute left-[18%] top-[28%] animate-pulse text-3xl text-white/80" />

      <HiOutlineSparkles className="absolute right-[25%] top-[40%] animate-pulse text-2xl text-pink-100/90" />

      <HiOutlineSparkles className="absolute bottom-[25%] left-[40%] animate-pulse text-xl text-white/70" />

      <HiOutlineSparkles className="absolute right-[15%] bottom-[30%] animate-pulse text-3xl text-pink-100/70" />

      {/* =====================================================
          3D FLOOR / DEPTH
      ====================================================== */}

      <div className="absolute bottom-[-25%] left-1/2 h-[500px] w-[120%] -translate-x-1/2 rotate-x-[65deg] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:55px_55px] opacity-30 [transform:perspective(700px)_rotateX(65deg)]" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-10">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* =================================================
              LEFT TEXT
          ================================================== */}

          <div className="text-center lg:text-left">

            {/* Badge */}

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 shadow-[0_10px_40px_rgba(136,19,55,0.2)] backdrop-blur-xl">

              <HiOutlineHeart className="animate-pulse text-pink-100" />

              <span className="text-sm font-medium tracking-wide text-white">
                A Special Day For Someone Special
              </span>

              <HiOutlineHeart className="animate-pulse text-pink-100" />

            </div>

            {/* Heading */}

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">

                <span className="block text-white text-[2.8rem] font-extrabold sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl drop-shadow-[0_5px_25px_rgba(76,5,25,0.45)]">
  Happy Birthday
</span>

                <span className="mt-3 block font-black text-[#fff1f2] drop-shadow-[0_0_12px_rgba(136,19,55,0.8)]">
  Dear Rubat
</span>

              <span className="mt-3 block text-4xl text-pink-100 sm:text-5xl">
                🍓✨
              </span>

            </h1>

            {/* Bangla */}

             <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed text-white drop-shadow-[0_2px_12px_rgba(76,5,25,0.35)] sm:text-xl lg:text-2xl">
  আজকের দিনটা শুধু  আপনার  জন্মদিন নয়,
  <br />

  <span className="text-pink-50">
     আজকের দিনটি আপনাকে মনে করিয়ে দিচ্ছি যে, আপনি কতটা বিশেষ 💗
  </span>
</p>

            {/* Description */}

              

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">

              <Link
                href="#surprise"
                className="group flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-bold text-rose-600 shadow-[0_15px_50px_rgba(255,255,255,0.25)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)]"
              >
                <HiOutlineGift className="text-xl transition duration-300 group-hover:rotate-12" />

                Open Your Surprise

                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>

              </Link>

              <Link
                href="#memories"
                className="flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <HiOutlineCake className="text-xl" />

                Our Memories
              </Link>

            </div>

            {/* =================================================
                STATS
            ================================================== */}

            <div className="mt-10 flex justify-center gap-3 lg:justify-start">

              <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 shadow-lg backdrop-blur-xl">
                <p className="text-xl font-bold">
                  ∞
                </p>

                <p className="text-xs text-rose-100/70">
                  Love
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 shadow-lg backdrop-blur-xl">
                <p className="text-xl font-bold">
                  365
                </p>

                <p className="text-xs text-rose-100/70">
                  Memories
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 shadow-lg backdrop-blur-xl">
                <p className="text-xl font-bold">
                  ♥
                </p>

                <p className="text-xs text-rose-100/70">
                  Forever
                </p>
              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT — PICTURE
          ================================================== */}

          <div className="relative flex items-center justify-center">

            {/* Huge glow behind image */}

            <div className="absolute h-[500px] w-[500px] rounded-full bg-pink-300/25 blur-[100px]" />

            {/* Large glass circle behind image */}

            <div className="absolute h-[450px] w-[450px] rounded-full border border-white/10 bg-white/5 shadow-[inset_-30px_-30px_80px_rgba(136,19,55,0.2),0_0_100px_rgba(251,113,133,0.35)] backdrop-blur-sm" />

            {/* Floating heart */}

            <div className="absolute left-[2%] top-[15%] z-30 animate-bounce text-5xl text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] [animation-duration:5s]">
              ♥
            </div>

            <div className="absolute right-[5%] top-[20%] z-30 animate-bounce text-4xl text-pink-100 drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] [animation-duration:7s]">
              ♥
            </div>

            {/* =================================================
                IMAGE CARD
            ================================================== */}

            <div className="relative z-20 w-full max-w-[430px]">

              {/* Back glass layer */}

              <div className="absolute inset-4 rotate-6 rounded-[2.5rem] border border-white/10 bg-white/10 backdrop-blur-md" />

              <div className="absolute inset-4 -rotate-6 rounded-[2.5rem] border border-white/10 bg-pink-200/10 backdrop-blur-md" />

              {/* Main glass card */}

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/10 p-3 shadow-[0_35px_100px_rgba(76,5,25,0.4)] backdrop-blur-xl">

                <div className="relative overflow-hidden rounded-[2rem]">

                  <Image
                    src={logos}
                    alt="Birthday memory"
                    width={700}
                    height={850}
                    priority
                    className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                  />

                  {/* Image shine */}

                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-rose-950/40" />

                  {/* Bottom glass message */}

                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/20 p-4 backdrop-blur-xl">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">

                        <HiOutlineHeart className="animate-pulse text-2xl text-pink-100" />

                      </div>

                      <div>

                        <p className="font-bold text-white">
                          Made With Love
                        </p>

                        <p className="text-xs text-white/70">
                          Just for you 🍓
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Birthday badge */}

              <div className="absolute -right-5 top-8 z-30 rounded-2xl border border-white/25 bg-white/15 px-4 py-3 shadow-[0_15px_40px_rgba(76,5,25,0.25)] backdrop-blur-xl">

                <div className="flex items-center gap-2">

                  <span className="text-xl">
                    🍓
                  </span>

                  <div>

                    <p className="text-xs text-white/60">
                      Today is
                    </p>

                    <p className="font-bold text-white">
                      Your Day!
                    </p>

                  </div>

                </div>

              </div>

              {/* Sparkle badge */}

              <div className="absolute -bottom-4 -left-4 z-30 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/15 shadow-xl backdrop-blur-xl">

                <HiOutlineSparkles className="animate-pulse text-2xl text-pink-100" />

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          BOTTOM GLOW
      ====================================================== */}

      <div className="absolute bottom-0 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-full bg-pink-300/20 blur-[100px]" />

      {/* =====================================================
          SCROLL
      ====================================================== */}

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1 text-white/60">

        <span className="text-[10px] font-medium tracking-[0.3em] uppercase">
          Scroll
        </span>

        <HiOutlineArrowDown className="animate-bounce text-lg" />

      </div>

    </section>
  );
};

export default HeroSection;