import React from "react";

export type MarketingLink = {
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type Industry = {
  title: string;
  description: string;
  businesses: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image?: string;
  initials: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FooterGroup = {
  title: string;
  links: MarketingLink[];
};

export const navLinks: MarketingLink[] = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "500+", label: "Active Businesses" },
  { value: "10K+", label: "Leads Generated" },
  { value: "4.8", label: "Average Rating" },
  { value: "50%", label: "Growth Increase" },
];

export const features: Feature[] = [
  {
    title: "AI Marketing Platform",
    description: "All-in-one dashboard to manage your entire online presence",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 5h16v5H4z" />
        <path d="M4 14h7v5H4z" />
        <path d="M14 14h6v5h-6z" />
      </svg>
    ),
  },
  {
    title: "Business Dashboard",
    description: "Real-time insights and analytics at your fingertips",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 19V9" />
        <path d="M12 19V5" />
        <path d="M19 19v-7" />
      </svg>
    ),
  },
  {
    title: "GMB Optimization",
    description: "AI-powered Google My Business management",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z" />
        <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      </svg>
    ),
  },
  {
    title: "Smart QR System",
    description: "Turn happy customers into Google reviews instantly",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h5v5H4z" />
        <path d="M15 4h5v5h-5z" />
        <path d="M4 15h5v5H4z" />
        <path d="M16 15h1" />
        <path d="M19 15h1" />
        <path d="M15 17h5" />
        <path d="M15 20h5" />
      </svg>
    ),
  },
  {
    title: "AI Review Assistant",
    description: "Auto-respond to reviews with personalized messages",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 18l4-3h10V5H5z" />
        <path d="M9 9h6" />
        <path d="M9 12h4" />
      </svg>
    ),
  },
  {
    title: "Content Calendar",
    description: "Plan and schedule posts across all platforms",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 3v3" />
        <path d="M17 3v3" />
        <path d="M4 8h16" />
        <path d="M5 5h14v15H5z" />
        <path d="M9 12h6" />
        <path d="M9 16h4" />
      </svg>
    ),
  },
];

export const industries: Industry[] = [
  {
    title: "Restaurants & Cafes",
    description: "Get more dine-in and delivery orders",
    businesses: "120+ Businesses",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Salons & Spas",
    description: "Fill your appointment calendar",
    businesses: "80+ Businesses",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Doctors & Clinics",
    description: "Grow your patient base",
    businesses: "95+ Businesses",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Gyms & Fitness",
    description: "Attract more members",
    businesses: "60+ Businesses",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Auto Services",
    description: "Get more service bookings",
    businesses: "45+ Businesses",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Home Services",
    description: "Connect with local customers",
    businesses: "70+ Businesses",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Retail Shops",
    description: "Drive footfall and online sales",
    businesses: "55+ Businesses",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Professional Services",
    description: "Build your client pipeline",
    businesses: "40+ Businesses",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      '"Before VayaparAI, we barely got 5 leads a month. Now we are generating 25+ enquiries every week. Our Google ranking improved dramatically."',
    name: "Dr. Priya Sharma",
    role: "Dental Clinic Owner, Mumbai",
    initials: "PS",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      '"As a salon owner, I struggled to compete online. After using VayaparAI, we saw a 60% jump in new customers within 2 months."',
    name: "Rahul Menon",
    role: "Salon Owner, Bangalore",
    initials: "RM",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      '"The AI review assistant is a game-changer. It responds to customer reviews professionally while I focus on my patients."',
    name: "Dr. Amit Patel",
    role: "Ayurvedic Clinic, Delhi",
    initials: "AP",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Will it work if I'm not tech-savvy?",
    answer:
      "Yes. VayaparAI is built for local business owners who want results without learning complex marketing tools.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Many businesses start seeing stronger visibility and more enquiries within the first few weeks of consistent use.",
  },
  {
    question: "Is my customer data secure?",
    answer:
      "The platform is designed to keep your business data protected while helping you automate outreach and reviews safely.",
  },
  {
    question: "Is there support if I get stuck?",
    answer:
      "Yes. You can reach out for help whenever you need setup guidance, best practices, or campaign support.",
  },
  {
    question: "Does VayaparAI work for all types of businesses?",
    answer:
      "It is built for local businesses across industries, from clinics and salons to gyms, stores, and professional services.",
  },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Industries", href: "/industries" },
      { label: "Pricing", href: "/pricing" },
      { label: "Reviews", href: "/reviews" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms and Conditions", href: "/terms-and-conditions" },
    ],
  },
];
