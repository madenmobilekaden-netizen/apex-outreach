"use client";
import { motion } from "framer-motion";

const dots = [
  { x: "10%", y: "20%", size: 8, delay: 0, dur: "float" },
  { x: "85%", y: "15%", size: 12, delay: 1, dur: "float2" },
  { x: "75%", y: "70%", size: 6, delay: 2, dur: "float3" },
  { x: "20%", y: "75%", size: 10, delay: 0.5, dur: "float2" },
  { x: "50%", y: "10%", size: 7, delay: 1.5, dur: "float" },
  { x: "90%", y: "50%", size: 9, delay: 2.5, dur: "float3" },
  { x: "5%", y: "55%", size: 5, delay: 3, dur: "float2" },
  { x: "40%", y: "85%", size: 11, delay: 0.8, dur: "float" },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Red geometric shape upper right */}
      <div
        className="absolute top-0 right-0 w-[45vw] h-[55vh] pointer-events-none"
        aria-hidden
      >
        <svg viewBox="0 0 400 350" className="w-full h-full">
          <path d="M400 0 L400 350 L80 0 Z" fill="#FF2D2D" opacity="0.08" />
          <path d="M400 0 L400 280 L140 0 Z" fill="#FF2D2D" opacity="0.06" />
          <path d="M400 0 L400 180 L240 0 Z" fill="#FF2D2D" opacity="0.12" />
        </svg>
      </div>

      {/* Animated floating dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className={`absolute rounded-full pointer-events-none animate-${dot.dur} animate-pulse-slow`}
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            backgroundColor: i % 3 === 0 ? "#FF2D2D" : "#DDDDDD",
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-[#F5F5F5] border border-[#E5E5E5] text-sm font-medium px-4 py-2 rounded-full mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF2D2D] animate-pulse" />
          Accepting new clients — 3 spots left this week
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-bebas text-[clamp(60px,9vw,100px)] leading-none text-[#111111] max-w-4xl mb-6"
        >
          Your Business Deserves A Website That Actually Works.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-500 max-w-xl mb-10 leading-relaxed"
        >
          We build professional websites for small businesses in 3 days flat.{" "}
          <strong className="text-[#111111]">$799.</strong> Money back if we
          miss the deadline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="bg-[#FF2D2D] hover:bg-[#CC0000] text-white font-bold px-8 py-4 rounded-2xl text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-red-200"
          >
            Get My Website — $799
          </button>
          <button
            onClick={() => scrollTo("work")}
            className="border-2 border-[#111111] hover:border-[#FF2D2D] hover:text-[#FF2D2D] text-[#111111] font-bold px-8 py-4 rounded-2xl text-base transition-all duration-200 hover:scale-105 active:scale-95"
          >
            See Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}
