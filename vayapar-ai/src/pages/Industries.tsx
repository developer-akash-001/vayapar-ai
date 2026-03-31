import React from "react";
import { motion } from "framer-motion";
import MarketingPage from "../components/MarketingPage";
import { industries } from "../data/marketing";

const Industries: React.FC = () => {
  return (
    <MarketingPage
      ctaDescription="See how VayaparAI supports restaurants, salons, clinics, gyms, service businesses, and more."
      ctaSecondaryLabel="Book a Demo"
      ctaSecondaryTo="/contact"
    >
      <section className="px-6 pb-10 pt-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Built for Every Industry</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            Grow Your Local Business
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Join hundreds of businesses already using VayaparAI to dominate local search across a
            wide range of industries.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => (
            <motion.article
              key={industry.title}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-gradient-to-b from-white to-[#fff4e7] shadow-[0_22px_50px_rgba(15,23,42,0.05)] transition hover:border-[#f0cc88] hover:shadow-[0_32px_80px_rgba(15,23,42,0.12)]"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h2 className="text-[1.4rem] font-extrabold tracking-tight text-slate-950">
                  {industry.title}
                </h2>
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
      </section>
    </MarketingPage>
  );
};

export default Industries;
