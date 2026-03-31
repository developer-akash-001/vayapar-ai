import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Industries", href: "/#industries" },
  { label: "Pricing", href: "/#cta" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[rgba(255,248,239,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-base font-black text-white shadow-sm">
            V
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-tight text-slate-950">Vayapar.ai</p>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              AI Marketing Platform
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden rounded-full border border-[#e4d2a5] bg-[linear-gradient(180deg,#fff8e7_0%,#ffefc7_100%)] px-5 py-2.5 text-sm font-semibold text-[#7a5310] shadow-[0_10px_24px_rgba(212,168,83,0.14)] transition hover:border-[#d4a853] hover:text-[#5f43d8] sm:inline-flex"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="inline-flex rounded-full border border-[#e4d2a5] bg-[linear-gradient(180deg,#fff8e7_0%,#ffefc7_100%)] px-5 py-2.5 text-sm font-semibold text-[#7a5310] shadow-[0_10px_24px_rgba(212,168,83,0.14)] transition hover:border-[#d4a853] hover:text-[#5f43d8]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
