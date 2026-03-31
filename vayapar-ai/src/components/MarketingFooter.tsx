import React from "react";
import { Link } from "react-router-dom";
import { footerGroups } from "../data/marketing";

const MarketingFooter: React.FC = () => {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-[#ecd8b3] bg-[linear-gradient(180deg,#fffdf8_0%,#fff0d4_42%,#ffe4bc_68%,#f0e4ff_100%)] px-6 py-16 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute -left-16 top-8 h-40 w-40 rounded-full bg-[#ffcc4d]/35 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-36 w-36 -translate-x-1/2 rounded-full bg-[#ff8a5b]/14 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-[#b999ff]/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 rounded-[36px] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.86)_0%,rgba(255,248,238,0.9)_100%)] p-8 shadow-[0_30px_90px_rgba(15,23,42,0.1)] backdrop-blur sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-md">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-lg font-black text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)]">
              V
            </div>
            <div>
              <p className="text-xl font-extrabold text-slate-950">Vayapar.ai</p>
              <p className="text-sm font-medium text-slate-500">AI-powered marketing platform</p>
            </div>
          </Link>

          <p className="mt-5 max-w-sm text-base leading-7 text-slate-600">
            AI-powered marketing platform for local business growth.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["500+ Businesses", "10K+ Leads", "AI-Powered"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#f0d188] bg-[linear-gradient(180deg,#fff5d9_0%,#ffe8b8_100%)] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8c5a06] shadow-[0_10px_24px_rgba(255,204,77,0.18)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-400">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="inline-flex text-sm font-medium text-slate-600 transition hover:translate-x-1 hover:text-[#6f48d9]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/70 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{"\u00A9"} 2026 VayaparAI. All rights reserved.</p>
        <p className="text-sm font-medium text-slate-500">Built for local business growth.</p>
      </div>
    </footer>
  );
};

export default MarketingFooter;
