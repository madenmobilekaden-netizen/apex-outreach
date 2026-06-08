"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  "Custom design built for your business",
  "Mobile-ready on all devices",
  "SEO basics included",
  "Contact form + click-to-call",
  "Live in 3 days guaranteed",
  "100% money back if we miss the deadline",
  "1 round of revisions included",
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="py-24 px-6 bg-[#F5F5F5]">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-[#FF2D2D]/10 text-[#FF2D2D] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Simple Pricing
          </div>
          <h2 className="font-bebas text-[clamp(42px,6vw,64px)] text-[#111111] leading-none">
            No Hidden Fees. Ever.
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl border-2 border-[#FF2D2D] p-10 shadow-[0_8px_40px_rgba(255,45,45,0.18)]"
        >
          <div className="text-center mb-8">
            <div className="font-bebas text-8xl text-[#FF2D2D] leading-none">
              $799
            </div>
            <div className="text-sm font-semibold text-gray-400 mt-1 tracking-widest uppercase">
              One-Time Flat Rate
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FF2D2D] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#111111] font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo("contact")}
            className="w-full bg-[#FF2D2D] hover:bg-[#CC0000] text-white font-bold py-4 rounded-2xl text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-red-200"
          >
            Claim Your Spot
          </button>
        </motion.div>
      </div>
    </section>
  );
}
