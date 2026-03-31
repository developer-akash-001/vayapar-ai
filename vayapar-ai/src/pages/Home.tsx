import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import MarketingFooter from "../components/MarketingFooter";
import ReadyCta from "../components/ReadyCta";
import { faqs, features, industries, stats, testimonials } from "../data/marketing";

const statCardIcons = [
  <svg key="store" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="M2 7h20" />
    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
  </svg>,
  <svg key="up" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
    <path d="M7 17 17 7" />
    <path d="M9 7h8v8" />
  </svg>,
  <svg key="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
    <path d="m12 3 2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.77 6.2 20.87l1.11-6.47-4.7-4.58 6.49-.94Z" />
  </svg>,
  <svg key="bars" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
    <path d="M4 20V10" />
    <path d="M10 20V4" />
    <path d="M16 20v-6" />
    <path d="M22 20H2" />
  </svg>,
];

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div id="top" className="bg-[#fff8ef] text-slate-900">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(212,168,83,0.12),transparent_24rem),linear-gradient(135deg,#17141f_0%,#101828_45%,#0b1321_100%)] px-6 pb-20 pt-10 sm:px-8 lg:px-12 lg:pb-24 lg:pt-16">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <span className="absolute left-[4%] top-[10%] h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_14px_rgba(255,255,255,0.55)]" />
            <span className="absolute left-[9%] top-[12%] h-px w-20 rotate-[148deg] bg-[#d4a853]/35" />
            <span className="absolute left-[22%] top-[9%] h-1.5 w-1.5 rounded-full bg-[#d4a853]/70 shadow-[0_0_12px_rgba(212,168,83,0.4)]" />
            <span className="absolute left-[44%] top-[8%] h-px w-14 rotate-[72deg] bg-[#d4a853]/35" />
            <span className="absolute left-[52%] top-[5%] h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="absolute right-[20%] top-[14%] h-px w-16 -rotate-[55deg] bg-[#d4a853]/35" />
            <span className="absolute right-[12%] top-[9%] h-1.5 w-1.5 rounded-full bg-white/75" />
            <span className="absolute right-[6%] top-[18%] h-px w-20 rotate-[28deg] bg-[#d4a853]/25" />
            <span className="absolute right-[3%] top-[22%] h-1.5 w-1.5 rounded-full bg-white/55" />
            <span className="absolute left-[38%] top-[34%] h-px w-20 rotate-[58deg] bg-white/18" />
            <span className="absolute left-[44%] top-[44%] h-1.5 w-1.5 rounded-full bg-[#d4a853]/60" />
            <span className="absolute left-[39%] top-[52%] h-px w-12 -rotate-[42deg] bg-[#d4a853]/30" />
            <span className="absolute left-[34%] top-[61%] h-1.5 w-1.5 rounded-full bg-white/65" />
            <span className="absolute left-[58%] bottom-[18%] h-px w-12 rotate-[24deg] bg-white/18" />
            <span className="absolute left-[63%] bottom-[14%] h-1.5 w-1.5 rounded-full bg-white/65" />
            <span className="absolute right-[16%] bottom-[17%] h-px w-12 -rotate-[48deg] bg-[#d4a853]/30" />
            <span className="absolute right-[12%] bottom-[10%] h-px w-10 rotate-[42deg] bg-white/18" />
            <span className="absolute right-[10%] bottom-[16%] h-1.5 w-1.5 rounded-full bg-[#d4a853]/65" />
            <span className="absolute right-[7%] bottom-[8%] h-1.5 w-1.5 rounded-full bg-white/65" />
            <span className="absolute left-[6%] bottom-[12%] h-px w-20 rotate-[56deg] bg-white/18" />
            <span className="absolute left-[14%] bottom-[4%] h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="absolute left-[28%] bottom-[14%] h-px w-14 -rotate-[40deg] bg-[#d4a853]/28" />
            <span className="absolute left-[34%] bottom-[8%] h-px w-10 rotate-[55deg] bg-white/16" />
            <span className="absolute left-[36%] bottom-[12%] h-1.5 w-1.5 rounded-full bg-[#d4a853]/55" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 pt-10 lg:pt-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-md">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d4a853] shadow-[0_0_12px_rgba(212,168,83,0.7)]" />
                Trusted by 500+ Local Businesses
              </span>

              <h1 className="mt-8 max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.25rem]">
                <span className="block text-white">Your All-in-One</span>
                <span className="block bg-gradient-to-b from-[#f5cf58] via-[#e5b51f] to-[#c89206] bg-clip-text text-transparent drop-shadow-[0_8px_24px_rgba(212,168,83,0.22)]">
                  AI Marketing
                </span>
                <span className="block bg-gradient-to-b from-[#f5cf58] via-[#e5b51f] to-[#c89206] bg-clip-text text-transparent drop-shadow-[0_8px_24px_rgba(212,168,83,0.22)]">
                  Platform
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/78 sm:text-[1.28rem]">
                Automate your digital presence, get more leads from Google, and let AI handle
                your marketing while you focus on your craft.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/register"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#f2c63d] to-[#e1a90b] px-8 py-4 text-lg font-bold text-[#2a2010] shadow-[0_18px_40px_rgba(212,168,83,0.34)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_46px_rgba(212,168,83,0.4)]"
                >
                  Get Started
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-white/72">
                {["Boost Visibility", "Get More Leads", "AI-Powered"].map((pill) => (
                  <span key={pill} className="inline-flex items-center gap-2">
                    <span className="text-[#d4a853]">✦</span>
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative z-10"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="rounded-[26px] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.05))] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md"
                  >
                    <div className="text-[#f2c14b]">{statCardIcons[index]}</div>
                    <p className="mt-7 text-5xl font-extrabold tracking-tight drop-shadow-[0_5px_14px_rgba(255,255,255,0.15)]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-base font-medium text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative z-10 mt-12 flex justify-center lg:mt-10">
            <div className="flex h-12 w-7 items-center justify-center rounded-full border-2 border-[#d4a853]/60 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <div className="h-3 w-1.5 rounded-full bg-[#d4a853]" />
            </div>
          </div>
        </section>

        <section id="features" className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">Powerful Features</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-[3.1rem] sm:whitespace-nowrap">
                <span className="text-[#8b4444]">Meet Your</span>{" "}
                <span className="text-[#5f43d8]">Digital</span>{" "}
                <span className="text-[#d4a853]">Marketing</span>{" "}
                <span className="bg-gradient-to-r from-[#8b4444] to-[#d4a853] bg-clip-text text-transparent">
                  AI Team
                </span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                A suite of intelligent tools designed to automate and optimize every aspect of your
                marketing.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45 }}
                  className="group rounded-[30px] border border-slate-200 bg-gradient-to-b from-white to-[#fffaf2] p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] transition hover:border-[#d8cfff] hover:shadow-[0_34px_80px_rgba(15,23,42,0.12)]"
                >
                  <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-[20px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),rgba(255,255,255,0.42)),linear-gradient(135deg,#f2ebff_0%,#efe3ff_45%,#fff6df_100%)] text-[#5f43d8] shadow-[0_14px_28px_rgba(95,67,216,0.14)] ring-1 ring-white transition duration-300 group-hover:scale-110 group-hover:shadow-[0_18px_36px_rgba(95,67,216,0.2)]">
                    <span className="absolute inset-[1px] rounded-[19px] border border-white/60" />
                    <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#ffd869] opacity-90 blur-[1px]" />
                    <span className="relative [&>svg]:h-7 [&>svg]:w-7">{feature.icon}</span>
                  </div>
                  <h3 className="mt-5 text-[1.65rem] font-extrabold tracking-tight text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base font-medium leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="relative overflow-hidden rounded-[30px] border border-[#ead8b0] bg-[linear-gradient(135deg,#fff8e7_0%,#fff3d8_48%,#f4e8ff_100%)] p-8 shadow-[0_24px_70px_rgba(164,123,33,0.12)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/45 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 left-0 h-24 w-24 rounded-full bg-[#cdbdff]/30 blur-3xl" />
                <p className="relative section-kicker mx-auto w-fit">Built for Every Industry</p>
                <h2 className="relative mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                  Grow Your Local Business
                </h2>
                <p className="relative mt-5 text-lg leading-8 text-slate-700">
                  Join hundreds of businesses already using VayaparAI to dominate local search.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {industries.map((industry) => (
                <motion.article
                  key={industry.title}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="group overflow-hidden rounded-[30px] border border-slate-200 bg-gradient-to-b from-[#fffdf9] to-[#fff4e7] shadow-[0_22px_50px_rgba(15,23,42,0.05)] transition hover:border-[#f0cc88] hover:shadow-[0_32px_80px_rgba(15,23,42,0.12)]"
                >
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-[1.4rem] font-extrabold tracking-tight text-slate-950">
                      {industry.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                      {industry.description}
                    </p>
                    <p className="mt-4 text-sm font-bold tracking-wide text-[#5f43d8]">
                      {industry.businesses}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="relative mt-14 overflow-hidden rounded-[34px] border border-[#ead8b0] bg-[linear-gradient(135deg,#fff7de_0%,#fff0cf_45%,#f4e7ff_100%)] p-8 shadow-[0_28px_80px_rgba(164,123,33,0.14)] sm:p-10">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#ffffff]/45 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 left-0 h-40 w-40 rounded-full bg-[#cdbdff]/28 blur-3xl" />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#8c6418] shadow-sm">
                    Any Local Business
                  </span>
                  <p className="mt-5 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-[2rem]">
                    Don't see your industry? VayaparAI works for any local business.
                  </p>
                </div>

                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.2)] transition hover:-translate-y-1 hover:bg-[#5f43d8]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                Real Stories,{" "}
                <span className="text-[#8b4444]">Real Results</span>
              </h2>
              <p className="mt-5 text-base font-medium leading-7 text-[#7f5a18] sm:text-[1.02rem]">
                See how VayaparAI has helped business owners like you grow their businesses.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <motion.article
                  key={testimonial.name}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-[32px] border border-[#2d3347] bg-[linear-gradient(180deg,#161b28_0%,#0f1420_100%)] p-8 shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition hover:border-[#5f43d8] hover:shadow-[0_34px_80px_rgba(15,23,42,0.22)]"
                >
                  <div className="mb-6 text-5xl font-black leading-none text-[#ffd869] transition duration-300 group-hover:text-[#ffe596]">
                    "
                  </div>
                  <div className="mb-5 flex items-center gap-1 text-[#f4b400]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className="text-lg leading-none">
                        {"\u2605"}
                      </span>
                    ))}
                  </div>
                  <div className="rounded-[24px] border border-white/8 bg-white/5 px-5 py-4">
                    <p className="text-lg font-semibold leading-8 text-white">{testimonial.quote}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-16 w-16 rounded-full object-cover ring-4 ring-white/90 shadow-[0_14px_34px_rgba(15,23,42,0.28)] transition duration-300 group-hover:scale-110 group-hover:ring-[#ffd869]"
                    />
                    <div>
                      <p className="text-base font-extrabold tracking-tight text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm font-medium text-white/65">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white px-6 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="relative overflow-hidden rounded-[30px] border border-[#ead8b0] bg-[linear-gradient(135deg,#fff8e7_0%,#fff3d8_48%,#f4e8ff_100%)] p-8 shadow-[0_24px_70px_rgba(164,123,33,0.12)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/45 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 left-0 h-24 w-24 rounded-full bg-[#cdbdff]/30 blur-3xl" />
                <span className="relative inline-flex rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#8c6418] shadow-sm">
                  Help Center
                </span>
                <h2 className="relative mt-5 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                  Common Questions
                </h2>
                <p className="relative mt-5 max-w-xl text-lg leading-8 text-slate-700">
                  Everything you need to know before you get started.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-[26px] border border-slate-200 bg-[#fff8ef]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-lg font-semibold text-slate-950">{faq.question}</span>
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-300 text-slate-600 transition ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen ? (
                      <div className="px-6 pb-6 pt-0 text-base leading-7 text-slate-600">
                        {faq.answer}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <ReadyCta
        description="Join 500+ local businesses that are already seeing real results with VayaparAI."
        secondaryLabel="Book a Demo"
        secondaryTo="/contact"
      />
      <MarketingFooter />
    </div>
  );
};

export default Home;
