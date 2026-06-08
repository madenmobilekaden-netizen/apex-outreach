"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    callTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#F5F5F5]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-[#FF2D2D]/10 text-[#FF2D2D] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Get Started
          </div>
          <h2 className="font-bebas text-[clamp(42px,6vw,64px)] text-[#111111] leading-none">
            Let&apos;s Build Your Website
          </h2>
          <p className="text-gray-500 mt-3">
            Fill out the form below and we&apos;ll call you within the hour.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white rounded-3xl shadow-md border-t-4 border-[#FF2D2D] p-8 md:p-10"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bebas text-3xl text-[#111111] mb-2">
                We Got It!
              </h3>
              <p className="text-gray-500 text-lg">
                Expect a call from us within the hour.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#111111] placeholder-gray-300 focus:outline-none focus:border-[#FF2D2D] focus:ring-2 focus:ring-[#FF2D2D]/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="(314) 555-0100"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#111111] placeholder-gray-300 focus:outline-none focus:border-[#FF2D2D] focus:ring-2 focus:ring-[#FF2D2D]/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#111111] placeholder-gray-300 focus:outline-none focus:border-[#FF2D2D] focus:ring-2 focus:ring-[#FF2D2D]/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-1.5">
                  Business Type
                </label>
                <input
                  type="text"
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  required
                  placeholder="What kind of business do you run?"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#111111] placeholder-gray-300 focus:outline-none focus:border-[#FF2D2D] focus:ring-2 focus:ring-[#FF2D2D]/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-1.5">
                  Best Time to Call
                </label>
                <select
                  name="callTime"
                  value={form.callTime}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#111111] focus:outline-none focus:border-[#FF2D2D] focus:ring-2 focus:ring-[#FF2D2D]/20 transition-all bg-white"
                >
                  <option value="" disabled>Select a time...</option>
                  <option value="morning">Morning 8am–12pm</option>
                  <option value="afternoon">Afternoon 12pm–5pm</option>
                  <option value="evening">Evening 5pm–8pm</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF2D2D] hover:bg-[#CC0000] text-white font-bold py-4 rounded-2xl text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-red-200 mt-2"
              >
                Get My Website — $799
              </button>

              <p className="text-center text-xs text-gray-400 mt-2">
                Money-back guarantee if we miss your 3-day deadline.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
