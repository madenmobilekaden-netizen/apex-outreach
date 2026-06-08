"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const portfolioSites = [
  {
    name: "Peak Roofing Co.",
    industry: "Contractor",
    html: `
      <div style="font-family:Arial,sans-serif;background:#0D1B2A;color:#fff;height:100%;overflow:hidden">
        <div style="background:#E07B28;padding:6px 12px;display:flex;align-items:center;justify-content:space-between">
          <span style="font-weight:900;font-size:11px;letter-spacing:1px">PEAK ROOFING CO.</span>
          <span style="font-size:9px;font-weight:bold">📞 (314) 555-0192</span>
        </div>
        <div style="padding:16px 12px;text-align:center;background:linear-gradient(135deg,#0D1B2A 60%,#1a2d42)">
          <div style="font-size:8px;color:#E07B28;letter-spacing:2px;font-weight:bold;margin-bottom:6px">LICENSED & INSURED</div>
          <div style="font-size:15px;font-weight:900;line-height:1.2;margin-bottom:6px">Roofing in Missouri<br/>You Can Trust</div>
          <div style="font-size:8px;color:#aaa;margin-bottom:10px">Free estimates • 20+ years experience</div>
          <button style="background:#E07B28;color:#fff;border:none;padding:5px 14px;border-radius:4px;font-weight:bold;font-size:9px;cursor:pointer">GET FREE ESTIMATE</button>
        </div>
        <div style="padding:10px 12px;background:#111e2d">
          <div style="font-size:9px;color:#E07B28;font-weight:bold;margin-bottom:6px;text-align:center">OUR SERVICES</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px">
            ${["Roof Replacement","Storm Damage","Gutters & Flashing","Commercial Roofing"].map(s=>`<div style="background:#0D1B2A;padding:5px 7px;border-radius:4px;border-left:2px solid #E07B28;font-size:8px">${s}</div>`).join("")}
          </div>
        </div>
        <div style="background:#E07B28;padding:6px 12px;text-align:center;margin-top:4px">
          <div style="font-size:10px;font-weight:900">📞 CALL NOW: (314) 555-0192</div>
        </div>
      </div>
    `,
  },
  {
    name: "Lakeview Eats",
    industry: "Restaurant",
    html: `
      <div style="font-family:Georgia,serif;background:#F5ECD7;color:#2C1810;height:100%;overflow:hidden">
        <div style="background:#8B1A1A;padding:7px 12px;display:flex;align-items:center;justify-content:space-between">
          <span style="color:#F5ECD7;font-weight:bold;font-size:11px;letter-spacing:1px">LAKEVIEW EATS</span>
          <span style="color:#F5ECD7;font-size:8px">Mon–Sun 11am–10pm</span>
        </div>
        <div style="background:linear-gradient(160deg,#8B1A1A,#C0392B);padding:18px 12px;text-align:center;position:relative;overflow:hidden">
          <div style="position:absolute;inset:0;opacity:0.12;background:repeating-linear-gradient(45deg,transparent,transparent 4px,rgba(255,200,100,0.5) 4px,rgba(255,200,100,0.5) 5px)"></div>
          <div style="position:relative">
            <div style="font-size:8px;color:#F5C86A;letter-spacing:2px;font-weight:bold;margin-bottom:5px">FRESH • LOCAL • DELICIOUS</div>
            <div style="font-size:16px;font-weight:900;color:#fff;line-height:1.2;margin-bottom:5px">Farm to Table<br/>at the Lake</div>
            <div style="font-size:8px;color:#eee;margin-bottom:8px">Serving the community since 2012</div>
            <button style="background:#F5C86A;color:#2C1810;border:none;padding:4px 12px;border-radius:3px;font-weight:bold;font-size:8px">VIEW MENU</button>
          </div>
        </div>
        <div style="padding:8px 12px">
          <div style="font-size:9px;color:#8B1A1A;font-weight:bold;text-align:center;margin-bottom:5px">TODAY'S SPECIALS</div>
          <div style="display:flex;flex-direction:column;gap:4px">
            ${[["Pan-Seared Salmon","$24"],["Ribeye Steak","$38"],["Pasta Primavera","$18"]].map(([n,p])=>`<div style="display:flex;justify-content:space-between;padding:4px 6px;background:#fff;border-radius:3px;font-size:8px"><span>${n}</span><span style="color:#8B1A1A;font-weight:bold">${p}</span></div>`).join("")}
          </div>
        </div>
        <div style="padding:6px 12px;background:#2C1810;color:#F5ECD7;text-align:center;font-size:8px">
          📍 123 Lakeshore Blvd • ☎ (314) 555-0288
        </div>
      </div>
    `,
  },
  {
    name: "Clarity Med Spa",
    industry: "Med Spa / Beauty",
    html: `
      <div style="font-family:'Arial',sans-serif;background:#FAFAF8;color:#333;height:100%;overflow:hidden">
        <div style="background:#fff;padding:7px 12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #E8EDE8">
          <span style="color:#5A7A5A;font-size:10px;font-weight:900;letter-spacing:3px">CLARITY</span>
          <span style="font-size:8px;color:#999">MED SPA & WELLNESS</span>
        </div>
        <div style="background:linear-gradient(160deg,#E8F0E8,#F5F9F5);padding:18px 12px;text-align:center">
          <div style="font-size:7px;color:#5A7A5A;letter-spacing:3px;font-weight:bold;margin-bottom:6px">LUXURY WELLNESS</div>
          <div style="font-size:15px;font-weight:900;color:#2A3A2A;line-height:1.3;margin-bottom:6px">Feel Like<br/>Yourself Again</div>
          <div style="font-size:8px;color:#888;margin-bottom:10px">Medical-grade skincare treatments</div>
          <button style="background:#5A7A5A;color:#fff;border:none;padding:5px 14px;border-radius:20px;font-weight:bold;font-size:8px">Book Consultation</button>
        </div>
        <div style="padding:8px 12px">
          <div style="font-size:8px;color:#5A7A5A;font-weight:bold;margin-bottom:5px;text-align:center">OUR SERVICES</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px">
            ${["Botox & Fillers","Laser Skin","Chemical Peels","Microneedling"].map(s=>`<div style="background:#E8F0E8;padding:5px 7px;border-radius:8px;font-size:7.5px;text-align:center;color:#2A3A2A">${s}</div>`).join("")}
          </div>
        </div>
        <div style="margin:6px 12px;background:#5A7A5A;padding:7px;border-radius:8px;text-align:center">
          <div style="font-size:8px;color:#fff;font-weight:bold">New Client Special: 20% Off First Visit</div>
        </div>
      </div>
    `,
  },
  {
    name: "Titan Fitness STL",
    industry: "Gym",
    html: `
      <div style="font-family:Arial,sans-serif;background:#0A0A0A;color:#fff;height:100%;overflow:hidden">
        <div style="background:#F5E000;padding:7px 12px;display:flex;align-items:center;justify-content:space-between">
          <span style="color:#0A0A0A;font-weight:900;font-size:11px;letter-spacing:2px">TITAN FITNESS STL</span>
          <span style="font-size:8px;color:#0A0A0A;font-weight:bold">24/7 ACCESS</span>
        </div>
        <div style="padding:16px 12px;text-align:center;background:linear-gradient(160deg,#1A1A1A,#0A0A0A)">
          <div style="font-size:7px;color:#F5E000;letter-spacing:3px;font-weight:bold;margin-bottom:5px">BUILD YOUR BEST SELF</div>
          <div style="font-size:18px;font-weight:900;line-height:1.1;margin-bottom:3px">NO EXCUSES.</div>
          <div style="font-size:18px;font-weight:900;line-height:1.1;color:#F5E000;margin-bottom:8px">JUST RESULTS.</div>
          <button style="background:#F5E000;color:#0A0A0A;border:none;padding:5px 14px;border-radius:3px;font-weight:900;font-size:9px">START FREE TRIAL</button>
        </div>
        <div style="padding:8px 12px;background:#111">
          <div style="font-size:8px;color:#F5E000;font-weight:bold;margin-bottom:5px;text-align:center">CLASS SCHEDULE</div>
          <div style="display:flex;flex-direction:column;gap:3px">
            ${[["6:00 AM","CrossFit Power"],["12:00 PM","HIIT Bootcamp"],["5:30 PM","Strength & Conditioning"]].map(([t,c])=>`<div style="display:flex;justify-content:space-between;padding:3px 6px;background:#1A1A1A;border-left:2px solid #F5E000;font-size:7.5px"><span style="color:#F5E000">${t}</span><span>${c}</span></div>`).join("")}
          </div>
        </div>
        <div style="padding:5px 12px;display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:4px">
          ${[["$49/mo","Basic"],["$79/mo","Premium"]].map(([p,l])=>`<div style="background:#1A1A1A;border:1px solid #F5E000;padding:5px;text-align:center;border-radius:3px"><div style="font-size:11px;font-weight:900;color:#F5E000">${p}</div><div style="font-size:7px;color:#aaa">${l}</div></div>`).join("")}
        </div>
      </div>
    `,
  },
  {
    name: "Summit Real Estate Group",
    industry: "Real Estate",
    html: `
      <div style="font-family:Arial,sans-serif;background:#1C1C1E;color:#fff;height:100%;overflow:hidden">
        <div style="background:#2C2C2E;padding:7px 12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #C9A84C">
          <span style="color:#C9A84C;font-weight:900;font-size:10px;letter-spacing:2px">SUMMIT REAL ESTATE</span>
          <span style="font-size:8px;color:#aaa">GROUP</span>
        </div>
        <div style="padding:14px 12px;background:linear-gradient(160deg,#2C2C2E,#1C1C1E)">
          <div style="font-size:7px;color:#C9A84C;letter-spacing:2px;font-weight:bold;margin-bottom:5px">LUXURY PROPERTIES</div>
          <div style="font-size:13px;font-weight:900;line-height:1.3;margin-bottom:4px">Find Your<br/>Dream Home</div>
          <div style="font-size:7.5px;color:#aaa;margin-bottom:8px">Top-rated agents in the St. Louis metro area</div>
          <button style="background:#C9A84C;color:#1C1C1E;border:none;padding:4px 12px;border-radius:3px;font-weight:bold;font-size:8px">View Listings</button>
        </div>
        <div style="padding:6px 12px">
          <div style="font-size:7.5px;color:#C9A84C;font-weight:bold;margin-bottom:5px">FEATURED LISTINGS</div>
          <div style="display:flex;flex-direction:column;gap:4px">
            ${[["4bd / 3ba • Clayton","$725,000"],["3bd / 2ba • Webster Groves","$489,000"]].map(([d,p])=>`<div style="background:#2C2C2E;padding:5px 8px;border-radius:4px;display:flex;justify-content:space-between;align-items:center"><div><div style="font-size:7.5px">${d}</div></div><div style="color:#C9A84C;font-weight:bold;font-size:8px">${p}</div></div>`).join("")}
          </div>
        </div>
        <div style="margin:5px 12px;background:#2C2C2E;padding:7px;border-radius:4px;display:flex;align-items:center;gap:8px">
          <div style="width:28px;height:28px;border-radius:50%;background:#C9A84C;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:bold;color:#1C1C1E;flex-shrink:0">JR</div>
          <div><div style="font-size:8px;font-weight:bold">James Rivera</div><div style="font-size:7px;color:#aaa">Lead Agent • 12 yrs exp</div></div>
        </div>
      </div>
    `,
  },
];

function BrowserMockup({ html, name }: { html: string; name: string }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
      {/* Browser chrome */}
      <div className="bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
        </div>
        <div className="flex-1 bg-white rounded-md px-2 py-1 text-xs text-gray-400 border border-gray-200 truncate">
          www.{name.toLowerCase().replace(/\s+/g, "").replace(/[^a-z]/g, "")}.com
        </div>
      </div>
      {/* Site preview */}
      <div className="h-[220px] overflow-hidden bg-white">
        <iframe
          srcDoc={`<!DOCTYPE html><html><body style="margin:0;padding:0;height:220px;overflow:hidden">${html}</body></html>`}
          className="w-full h-full border-none"
          title={name}
          sandbox="allow-same-origin"
        />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#FF2D2D]/10 text-[#FF2D2D] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Portfolio
          </div>
          <h2 className="font-bebas text-[clamp(42px,6vw,64px)] text-[#111111] leading-none">
            Recent Projects
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Real websites built for real businesses. Each one live in 3 days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioSites.map((site, i) => (
            <motion.div
              key={site.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              className="group hover:-translate-y-2 transition-all duration-300 cursor-default"
            >
              <BrowserMockup html={site.html} name={site.name} />
              <div className="mt-3 flex items-center justify-between px-1">
                <div className="font-bold text-[#111111]">{site.name}</div>
                <div className="text-xs font-semibold bg-[#F5F5F5] text-[#FF2D2D] px-3 py-1 rounded-full">
                  {site.industry}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
