"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "1",
    icon: "📋",
    title: "You Fill Out the Form",
    desc: "Tell us about your business. Takes 2 minutes.",
  },
  {
    num: "2",
    icon: "⚡",
    title: "We Build Your Site",
    desc: "Custom design, built fast. You approve before it goes live.",
  },
  {
    num: "3",
    icon: "🚀",
    title: "You Go Live",
    desc: "Your site is live within 3 days. Guaranteed or your money back.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="bg-[#F5F5F5] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#FF2D2D]/10 text-[#FF2D2D] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Simple Process
          </div>
          <h2 className="font-bebas text-[clamp(42px,6vw,64px)] text-[#111111] leading-none">
            From Zero to Live in 3 Days
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="font-bebas text-7xl text-[#FF2D2D]/10 absolute -top-2 -right-2 leading-none select-none group-hover:text-[#FF2D2D]/20 transition-colors">
                {step.num}
              </div>
              <div className="text-3xl mb-4">{step.icon}</div>
              <div className="font-bebas text-2xl text-[#FF2D2D] mb-1">
                Step {step.num}
              </div>
              <h3 className="font-bold text-lg text-[#111111] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
