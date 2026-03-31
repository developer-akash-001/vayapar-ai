import React from "react";
import { Link } from "react-router-dom";

type ReadyCtaProps = {
  title?: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

const ReadyCta: React.FC<ReadyCtaProps> = ({
  title = "Ready to Grow Your Business?",
  description,
  primaryLabel = "Start Free Trial",
  primaryTo = "/register",
  secondaryLabel,
  secondaryTo,
}) => {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[40px] bg-slate-950 px-8 py-14 text-white shadow-[0_35px_90px_rgba(15,23,42,0.22)] sm:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={primaryTo}
            className="inline-flex items-center justify-center rounded-full bg-[#ffd869] px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-[#f5cd43]"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryTo ? (
            <Link
              to={secondaryTo}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-300">
          <span>No credit card required</span>
          <span>Setup in 5 minutes</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </section>
  );
};

export default ReadyCta;
