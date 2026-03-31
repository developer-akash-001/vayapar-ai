import React from "react";
import { motion } from "framer-motion";
import MarketingPage from "../components/MarketingPage";
import { stats, testimonials } from "../data/marketing";

const ReviewsPage: React.FC = () => {
  return (
    <MarketingPage
      ctaDescription="Join 500+ businesses already seeing stronger visibility, better reviews, and more enquiries."
      ctaSecondaryLabel="Contact Support"
      ctaSecondaryTo="/contact"
    >
      <section className="px-6 pb-10 pt-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Customer Results</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-center text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            Real Stories, Real Results
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-slate-600 sm:text-[1.02rem]">
            See how VayaparAI has helped business owners grow their visibility, earn better
            reviews, and bring in more leads.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_22px_50px_rgba(15,23,42,0.06)]"
              >
                <p className="text-4xl font-extrabold tracking-tight text-slate-950">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="group rounded-[32px] border border-[#2d3347] bg-[linear-gradient(180deg,#161b28_0%,#0f1420_100%)] p-8 shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition hover:border-[#5f43d8] hover:shadow-[0_34px_80px_rgba(15,23,42,0.22)]"
            >
              <div className="mb-5 text-5xl font-black leading-none text-[#ffd869] transition duration-300 group-hover:text-[#ffe38c]">
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
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-white/90 shadow-[0_14px_34px_rgba(15,23,42,0.18)] transition duration-300 group-hover:scale-110 group-hover:ring-[#ffd869]"
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
      </section>

      <section className="px-6 pb-8 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            {
              title: "More Leads",
              text: "Businesses use VayaparAI to improve Google visibility and convert more searchers into enquiries.",
            },
            {
              title: "Better Reviews",
              text: "Smart review prompts and AI-assisted replies help build stronger trust with local customers.",
            },
            {
              title: "Faster Marketing",
              text: "Automations reduce the time spent on repetitive posting, review management, and listing updates.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-[#f4f0ff] p-8 shadow-[0_18px_50px_rgba(15,23,42,0.04)]"
            >
              <h2 className="text-2xl font-bold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </MarketingPage>
  );
};

export default ReviewsPage;
