import React from "react";
import MarketingPage from "../components/MarketingPage";

const sections = [
  {
    title: "Use of the Platform",
    body: "VayaparAI is intended to help businesses manage visibility, reviews, and marketing workflows in a responsible and lawful way.",
  },
  {
    title: "Customer Responsibilities",
    body: "Customers are expected to provide accurate account details and use the platform in a way that respects applicable laws and third-party platform rules.",
  },
  {
    title: "Service Availability",
    body: "Features, onboarding, and support may evolve over time as the product improves and adapts to business needs.",
  },
  {
    title: "Questions",
    body: "If you need clarification about platform usage or commercial terms, please contact the team before proceeding.",
  },
];

const TermsConditions: React.FC = () => {
  return (
    <MarketingPage showCta={false}>
      <section className="px-6 pb-10 pt-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="section-kicker">Legal</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            Terms and Conditions
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            These general terms describe the expected use of the VayaparAI platform and related
            services.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl space-y-6">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_22px_50px_rgba(15,23,42,0.05)]"
            >
              <h2 className="text-2xl font-bold text-slate-950">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </MarketingPage>
  );
};

export default TermsConditions;
