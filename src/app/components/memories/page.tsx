 
// "use client";
//  import "./memory.css"
// import Image from "next/image";
// import { HiOutlineArrowUpRight } from "react-icons/hi2";
// import {
//   HiOutlineHeart,
//   HiOutlineSparkles,
//   HiOutlineCamera,
// //   HiOutlineArrowUpRight,

// } from "react-icons/hi";

// const memories = [
//   {
//     id: 1,
//     number: "Memory 01",
//     title: "Beautiful Smiles",
//     description:
//       "The little smiles that make ordinary days feel special.",
//     image: "/memories/memory-1.jpg",
//     category: "Happiness",
//     gradient: "from-pink-300/80 to-rose-400/80",
//     icon: <HiOutlineHeart />,
//   },
//   {
//     id: 2,
//     number: "Memory 02",
//     title: "Precious Moments",
//     description:
//       "Small moments that stay close to the heart forever.",
//     image: "/memories/memory-2.jpg",
//     category: "Memories",
//     gradient: "from-fuchsia-300/80 to-pink-500/80",
//     icon: <HiOutlineCamera />,
//   },
//   {
//     id: 3,
//     number: "Memory 03",
//     title: "Endless Happiness",
//     description:
//       "May every new chapter bring more joy and beautiful memories.",
//     Image: "./images/ChatGPT Image Sep 20, 2026, 04_21_41 PM.png",
//     category: "Special Moments",
//     gradient: "from-rose-300/80 to-fuchsia-400/80",
//     icon: <HiOutlineSparkles />,
//   },
// ];

// const MemoryPage = () => {
//   return (
//     <section
//       id="memories"
//       className="relative isolate overflow-hidden px-6 py-24 sm:py-28 lg:px-10"
//     >
//       {/* ================= BACKGROUND DECORATIONS ================= */}

//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />

//         <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-fuchsia-200/30 blur-3xl" />

//         <span className="memory-decoration left-[8%] top-24">
//           ♡
//         </span>

//         <span className="memory-decoration right-[10%] top-40 text-3xl">
//           ✦
//         </span>

//         <span className="memory-decoration bottom-20 left-[45%] text-2xl">
//           ✧
//         </span>
//       </div>

//       <div className="mx-auto max-w-7xl">

//         {/* ================= SECTION HEADER ================= */}

//         <div className="mx-auto max-w-3xl text-center">

//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/60 px-4 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-pink-500 shadow-sm backdrop-blur-md">
//             <HiOutlineSparkles className="text-base" />
//             Little Moments
//           </div>

//           <h2 className="text-4xl font-black leading-tight tracking-tight text-[#701a45] sm:text-5xl lg:text-6xl">
//             Memories That
//             <span className="block bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
//               Feel Like Magic
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#a65a7e] sm:text-base">
//             Every beautiful moment deserves to be remembered.
//             Here are a few little reminders of happiness, smiles,
//             and unforgettable memories.
//           </p>
//         </div>

//         {/* ================= MEMORY CARDS ================= */}

//         <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

//           {memories.map((memory) => (
//             <article
//               key={memory.id}
//               className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 p-3 shadow-[0_15px_45px_rgba(190,24,93,0.10)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/80 hover:shadow-[0_25px_60px_rgba(190,24,93,0.20)]"
//             >
//               {/* Image Container */}

//               <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">

//                 <Image
//                   src={memory.image}
//                   alt={memory.title}
//                   fill
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   className="object-cover transition duration-700 ease-out group-hover:scale-110"
//                 />

//                 {/* Image Gradient */}

//                 <div
//                   className={`absolute inset-0 bg-gradient-to-t ${memory.gradient} opacity-30 transition duration-500 group-hover:opacity-60`}
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#4c1235]/80 via-transparent to-transparent" />

//                 {/* Top Badge */}

//                 <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md">
//                   <span>{memory.icon}</span>
//                   {memory.category}
//                 </div>

//                 {/* Open Icon */}

//                 <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-md transition duration-300 group-hover:rotate-45 group-hover:bg-white/40">
//                   <HiOutlineArrowUpRight className="text-lg" />
//                 </div>

//                 {/* Image Bottom Content */}

//                 <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

//                   <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-pink-100">
//                     {memory.number}
//                   </p>

//                   <h3 className="text-2xl font-black tracking-tight">
//                     {memory.title}
//                   </h3>

//                   <div className="mt-3 h-0.5 w-10 rounded-full bg-pink-200 transition-all duration-500 group-hover:w-20" />
//                 </div>
//               </div>

//               {/* Card Description */}

//               <div className="px-3 pb-4 pt-5">

//                 <p className="text-sm leading-7 text-[#ad6687]">
//                   {memory.description}
//                 </p>

//                 <div className="mt-5 flex items-center justify-between">

//                   <span className="text-xs font-bold text-pink-500">
//                     Made with love
//                   </span>

//                   <HiOutlineHeart className="text-xl text-pink-300 transition duration-300 group-hover:scale-125 group-hover:text-pink-500" />
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* ================= BOTTOM MESSAGE ================= */}

//         <div className="mx-auto mt-16 flex max-w-xl items-center justify-center gap-3 text-center text-sm font-semibold text-pink-400">
//           <span className="h-px w-12 bg-pink-200" />
//           <HiOutlineHeart className="text-lg" />
//           More beautiful memories to come
//           <HiOutlineHeart className="text-lg" />
//           <span className="h-px w-12 bg-pink-200" />
//         </div>
//       </div>

//       {/* ================= LOCAL ANIMATIONS ================= */}

//       {/* <style jsx>{`
//         .memory-decoration {
//           position: absolute;
//           color: rgba(236, 72, 153, 0.35);
//           font-size: 42px;
//           animation: memoryFloat 8s ease-in-out infinite;
//         }

//         @keyframes memoryFloat {
//           0%,
//           100% {
//             transform: translateY(0) rotate(0deg);
//             opacity: 0.35;
//           }

//           50% {
//             transform: translateY(-25px) rotate(12deg);
//             opacity: 0.8;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .memory-decoration {
//             animation: none;
//           }
//         }
//       `}</style> */}
//     </section>
//   );
// };

// export default MemoryPage;
import React from 'react';

const page = () => {
  return (
    <div>
      
    </div>
  );
};

export default page;