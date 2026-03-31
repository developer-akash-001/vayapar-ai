import React from "react";
import MarketingPage from "../components/MarketingPage";

const plans = [
  {
    name: "Starter",
    price: "For new local businesses",
    description: "Build visibility, collect reviews, and establish a stronger digital presence.",
    features: ["Google presence support", "Review growth tools", "Basic content scheduling"],
  },
  {
    name: "Growth",
    price: "For growing teams",
    description: "A more complete marketing stack for businesses focused on leads and repeat growth.",
    features: ["AI review assistant", "Business dashboard", "Advanced campaign workflows"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom setup",
    description: "Tailored onboarding and support for multi-location or higher-volume businesses.",
    features: ["Custom onboarding", "Priority support", "Flexible rollout planning"],
  },
];

const Pricing: React.FC = () => {
  return (
    <MarketingPage
      ctaTitle="Ready to Find the Right Plan?"
      ctaDescription="Tell us about your business and we’ll help you choose the best VayaparAI setup."
      ctaPrimaryLabel="Get Started"
      ctaPrimaryTo="/register"
      ctaSecondaryLabel="Book a Demo"
      ctaSecondaryTo="/contact"
    >
      <section className="px-6 pb-8 pt-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="section-kicker">Pricing</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            Flexible Options for Local Business Growth
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Choose a VayaparAI setup that matches your current stage, then scale up as your
            visibility, reviews, and lead flow grow.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[32px] border p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)] ${
                plan.featured
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-900"
              }`}
            >
              <p className={`text-sm font-bold uppercase tracking-[0.22em] ${plan.featured ? "text-[#ffd869]" : "text-slate-400"}`}>
                {plan.name}
              </p>
              <h2 className="mt-4 text-3xl font-extrabold">{plan.price}</h2>
              <p className={`mt-4 text-base leading-7 ${plan.featured ? "text-slate-300" : "text-slate-600"}`}>
                {plan.description}
              </p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className={`rounded-2xl px-4 py-3 text-sm font-medium ${plan.featured ? "bg-white/10 text-white" : "bg-[#f8f4ec] text-slate-700"}`}>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.05)]">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950">What’s Included</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Every setup is focused on helping you get more leads from Google, improve your digital
              reputation, and save time with AI-assisted marketing workflows.
            </p>
          </div>
          <div className="rounded-[30px] border border-slate-200 bg-[#f4f0ff] p-8 shadow-[0_24px_60px_rgba(15,23,42,0.05)]">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950">Need a Custom Plan?</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              If you run multiple locations or need a more tailored rollout, book a demo and we’ll
              help map out the right setup for your business.
            </p>
          </div>
        </div>
      </section>
    </MarketingPage>
  );
};

export default Pricing;
