import React from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,214,105,0.34),transparent_24rem),radial-gradient(circle_at_bottom_right,rgba(185,153,255,0.28),transparent_24rem),linear-gradient(145deg,#fff8ef_0%,#ffefd8_46%,#f7ebff_100%)] px-6 py-12">
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />
      <div className="pointer-events-none absolute left-[8%] top-[14%] h-40 w-40 rounded-full bg-[#ffd869]/28 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-[18%] h-44 w-44 rounded-full bg-[#b999ff]/22 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[10%] left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/22 blur-3xl" />

      <div className="relative z-10 w-full max-w-md rounded-[32px] border border-[#ead8b0] bg-[linear-gradient(180deg,#fffdf8_0%,#fff6e8_100%)] p-8 shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:p-10">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[linear-gradient(135deg,#2b2a3a_0%,#5f43d8_100%)] text-base font-black text-white shadow-[0_14px_30px_rgba(95,67,216,0.22)]">
            V
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-tight text-slate-950">Vayapar.ai</p>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Get Started
            </p>
          </div>
        </Link>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ecd39a] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,245,219,0.98)_100%)] px-4 py-2 text-sm font-semibold text-[#7a5310] shadow-[0_12px_28px_rgba(212,168,83,0.12)] transition hover:-translate-y-0.5 hover:border-[#d4a853] hover:text-[#5f43d8]"
          >
            <span className="text-base leading-none">←</span>
            Home
          </Link>
        </div>

        <div className="mt-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">Create Account</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Set up your account to start managing reviews, visibility, and AI-powered marketing in
            one place.
          </p>
        </div>

        <form className="mt-8 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">Name</span>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full rounded-2xl border border-[#eadfc8] bg-white/85 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#5f43d8] focus:bg-white"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">Email</span>
            <input
              type="email"
              placeholder="you@business.com"
              className="w-full rounded-2xl border border-[#eadfc8] bg-white/85 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#5f43d8] focus:bg-white"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">Password</span>
            <input
              type="password"
              placeholder="Create a secure password"
              className="w-full rounded-2xl border border-[#eadfc8] bg-white/85 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#5f43d8] focus:bg-white"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full border border-[#f0d188] bg-[linear-gradient(135deg,#f8d560_0%,#efb61f_58%,#dd9e05_100%)] px-5 py-3.5 text-sm font-bold tracking-[0.02em] text-[#2b2112] shadow-[0_20px_40px_rgba(212,168,83,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_46px_rgba(212,168,83,0.34)]"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-[#5f43d8]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
