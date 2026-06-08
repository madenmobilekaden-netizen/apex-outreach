"use client";

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#111111] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="font-bebas text-2xl text-[#FF2D2D] mb-1">
              APEX OUTREACH
            </div>
            <div className="text-gray-400 text-sm">
              Your Website. 3 Days. Guaranteed.
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { label: "Work", id: "work" },
              { label: "How It Works", id: "how-it-works" },
              { label: "Pricing", id: "pricing" },
              { label: "Contact", id: "contact" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© 2025 Apex Outreach. All rights reserved.</span>
          <span>Professional websites for small businesses.</span>
        </div>
      </div>
    </footer>
  );
}
