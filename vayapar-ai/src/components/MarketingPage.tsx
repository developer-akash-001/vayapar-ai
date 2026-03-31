import React from "react";
import Navbar from "./Navbar";
import MarketingFooter from "./MarketingFooter";
import ReadyCta from "./ReadyCta";

type MarketingPageProps = {
  children: React.ReactNode;
  ctaDescription?: string;
  ctaTitle?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryTo?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryTo?: string;
  showCta?: boolean;
};

const MarketingPage: React.FC<MarketingPageProps> = ({
  children,
  ctaDescription = "Join 500+ local businesses that are already seeing real results with VayaparAI.",
  ctaTitle,
  ctaPrimaryLabel,
  ctaPrimaryTo,
  ctaSecondaryLabel,
  ctaSecondaryTo,
  showCta = true,
}) => {
  return (
    <div className="min-h-screen bg-[#fff8ef] text-slate-900">
      <Navbar />
      <main>{children}</main>
      {showCta ? (
        <ReadyCta
          title={ctaTitle}
          description={ctaDescription}
          primaryLabel={ctaPrimaryLabel}
          primaryTo={ctaPrimaryTo}
          secondaryLabel={ctaSecondaryLabel}
          secondaryTo={ctaSecondaryTo}
        />
      ) : null}
      <MarketingFooter />
    </div>
  );
};

export default MarketingPage;
