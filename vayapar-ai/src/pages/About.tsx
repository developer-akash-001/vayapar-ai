import React from "react";
import MarketingPage from "../components/MarketingPage";

const About: React.FC = () => {
  return (
    <MarketingPage
      ctaDescription="See how VayaparAI helps local businesses strengthen their digital presence without adding more manual work."
      ctaSecondaryLabel="Contact"
      ctaSecondaryTo="/contact"
    >
      <section className="px-6 pb-10 pt-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">About</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            AI-Powered Marketing for Local Business Growth
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            VayaparAI is built to help local businesses automate their digital presence, get more
            leads from Google, and save time with smarter marketing workflows.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            {
              title: "Built for Local Visibility",
              text: "The platform focuses on the channels that matter most for neighborhood businesses: Google, reviews, and consistent local content.",
            },
            {
              title: "Powered by Automation",
              text: "AI handles repetitive marketing tasks so owners can spend more time on operations, customers, and service quality.",
            },
            {
              title: "Made to Be Practical",
              text: "The goal is straightforward: help more businesses grow online without needing a full-time marketing team.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)]"
            >
              <h2 className="text-2xl font-bold text-slate-950">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </MarketingPage>
  );
};

export default About;
