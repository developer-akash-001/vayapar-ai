import React from "react";
import MarketingPage from "../components/MarketingPage";

const sections = [
  {
    title: "Information We Handle",
    body: "We collect the details needed to provide the platform, support customers, and improve product performance for local businesses.",
  },
  {
    title: "How Information Is Used",
    body: "Information may be used to manage accounts, support campaigns, improve onboarding, and maintain platform reliability and security.",
  },
  {
    title: "Data Protection",
    body: "Reasonable safeguards are used to protect business and customer information while it moves through supported workflows.",
  },
  {
    title: "Support and Contact",
    body: "If you have questions about how information is handled, please contact the team for clarification and support.",
  },
];

const PrivacyPolicy: React.FC = () => {
  return (
    <MarketingPage
      showCta={false}
    >
      <section className="px-6 pb-10 pt-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="section-kicker">Legal</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            This page outlines the general principles used to handle information within the
            VayaparAI platform.
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

export default PrivacyPolicy;
