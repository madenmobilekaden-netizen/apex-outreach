"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Site was live in 2 days. Already getting calls from it. Best $799 I've spent on my business.",
    name: "Mike T.",
    business: "MT Contracting",
    initials: "MT",
    color: "#FF2D2D",
  },
  {
    quote:
      "I didn't think a real website was possible at this price. Completely blown away by how professional it looks.",
    name: "Sarah K.",
    business: "SK Boutique",
    initials: "SK",
    color: "#8B5CF6",
  },
  {
    quote:
      "They built my entire site while I was on a job site. Checked my phone and it was live. Unreal.",
    name: "Derek M.",
    business: "Lakeview Landscaping",
    initials: "DM",
    color: "#059669",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#FF2D2D]/10 text-[#FF2D2D] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="font-bebas text-[clamp(42px,6vw,64px)] text-[#111111] leading-none">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-[0_6px_30px_rgba(255,45,45,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#111111] leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-[#111111] text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.business}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
