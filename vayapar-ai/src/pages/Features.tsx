import React from "react";
import MarketingPage from "../components/MarketingPage";
import { features } from "../data/marketing";

const Features: React.FC = () => {
  return (
    <MarketingPage
      ctaDescription="See how VayaparAI can automate your digital presence and help you attract more local customers."
      ctaSecondaryLabel="Book a Demo"
      ctaSecondaryTo="/contact"
    >
      <section className="px-6 pb-10 pt-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Powerful Features</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            <span className="text-[#8b4444]">Meet Your</span>{" "}
            <span className="text-[#5f43d8]">Digital</span>{" "}
            <span className="text-[#d4a853]">Marketing</span>{" "}
            <span className="bg-gradient-to-r from-[#8b4444] to-[#d4a853] bg-clip-text text-transparent">
              AI Team
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A suite of intelligent tools designed to automate and optimize every aspect of your
            marketing, from reviews and listings to content and analytics.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-[30px] border border-slate-200 bg-gradient-to-b from-white to-[#fffaf2] p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#d8cfff] hover:shadow-[0_34px_80px_rgba(15,23,42,0.12)]"
            >
              <div className="inline-flex rounded-2xl bg-[#efe8ff] p-3 text-[#5f43d8] transition duration-300 group-hover:scale-110 group-hover:bg-[#e5dbff]">
                {feature.icon}
              </div>
              <h2 className="mt-5 text-[1.65rem] font-extrabold tracking-tight text-slate-950">
                {feature.title}
              </h2>
              <p className="mt-3 text-base font-medium leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            {
              title: "Manage Everything in One Place",
              text: "Bring reviews, visibility, posting, and insights together in one dashboard instead of juggling disconnected tools.",
            },
            {
              title: "Designed for Local Search",
              text: "Optimize the channels that actually move the needle for neighborhood businesses, especially Google and customer reviews.",
            },
            {
              title: "Built to Save Time",
              text: "Let AI handle repetitive marketing tasks so you can focus more on customers, operations, and growth.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-[#fff4d6] p-8 shadow-[0_18px_50px_rgba(15,23,42,0.04)]"
            >
              <h3 className="text-2xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </MarketingPage>
  );
};

export default Features;
