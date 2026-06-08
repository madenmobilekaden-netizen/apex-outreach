"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bebas text-2xl tracking-wider text-[#FF2D2D] hover:text-[#CC0000] transition-colors"
        >
          APEX OUTREACH
        </button>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Work", id: "work" },
            { label: "How It Works", id: "how-it-works" },
            { label: "Pricing", id: "pricing" },
            { label: "Contact", id: "contact" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-[#111111] hover:text-[#FF2D2D] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#FF2D2D] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="bg-[#FF2D2D] hover:bg-[#CC0000] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Get My Website
        </button>
      </div>
    </motion.nav>
  );
}
