"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "50+", label: "Sites Launched" },
  { number: "3-Day", label: "Average Turnaround" },
  { number: "100%", label: "Money-Back Guarantee" },
];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className="w-full border-t-2 border-[#FF2D2D] bg-white py-6"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-bebas text-4xl text-[#FF2D2D] leading-none">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-500 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
