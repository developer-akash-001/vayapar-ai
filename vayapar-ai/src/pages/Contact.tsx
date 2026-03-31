import React from "react";
import MarketingPage from "../components/MarketingPage";

const contactCards = [
  {
    title: "WhatsApp Support",
    text: "Reach out for quick answers, onboarding help, or product guidance.",
  },
  {
    title: "Email Assistance",
    text: "Share questions about features, pricing, or setup and our team will get back to you.",
  },
  {
    title: "Demo Requests",
    text: "Book a walkthrough if you want to see how VayaparAI could fit your business.",
  },
];

const Contact: React.FC = () => {
  return (
    <MarketingPage
      ctaTitle="Let's Talk About Your Business"
      ctaDescription="Tell us what you want to improve and we’ll help you find the right next step."
      ctaPrimaryLabel="Get Started Free"
      ctaPrimaryTo="/register"
    >
      <section className="px-6 pb-10 pt-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Contact</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            We're Here to Help
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Reach out via WhatsApp or email and we’ll get back to you within hours.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)]"
            >
              <h2 className="text-2xl font-bold text-slate-950">{card.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-slate-200 bg-[#fff4d6] p-8 shadow-[0_24px_60px_rgba(15,23,42,0.05)]">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950">Support Hours</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Our team is available to help with onboarding, campaign setup, and product questions.
            </p>
          </div>
          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.05)]">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950">What to Share</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Include your business type, current challenges, and what you want to improve so the
              team can guide you faster.
            </p>
          </div>
        </div>
      </section>
    </MarketingPage>
  );
};

export default Contact;
