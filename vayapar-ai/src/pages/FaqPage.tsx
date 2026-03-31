import React, { useState } from "react";
import { Link } from "react-router-dom";
import MarketingPage from "../components/MarketingPage";
import { faqs } from "../data/marketing";

const supportCards = [
  { title: "Getting Started", description: "Learn the basics" },
  { title: "Support", description: "Contact our team" },
  { title: "Security", description: "Your data is safe" },
];

const FaqPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <MarketingPage
      ctaDescription="Join 500+ businesses already seeing real results with VayaparAI."
      ctaSecondaryLabel={undefined}
      ctaSecondaryTo={undefined}
    >
      <section className="px-6 pb-8 pt-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">We're Here to Help</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Find answers to common questions about VayaparAI and how it can help your business
            grow.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {supportCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_22px_50px_rgba(15,23,42,0.06)]"
              >
                <h2 className="text-2xl font-bold text-slate-950">{card.title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker">Common Questions</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[26px] border border-slate-200 bg-white"
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

      <section className="px-6 pb-8 pt-0 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[32px] border border-slate-200 bg-[#f4f0ff] p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950">Still Have Questions?</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Our support team is always ready to help. Reach out via WhatsApp or email and we'll
              get back to you within hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Get Started Free
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </MarketingPage>
  );
};

export default FaqPage;
