import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import PricingTable from "@/components/shared/PricingTable";
import FaqAccordion from "@/components/shared/FaqAccordion";
import PageCTA from "@/components/shared/PageCTA";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CouponCard from "@/components/home/CouponCard";
import { BUSINESS, COUPONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Garage Door FAQ & Coupons Glen Cove NY | Save Up to $250 | ${BUSINESS.phone}`,
  description:
    "Garage door coupons and FAQ for Glen Cove NY 11542 and Glen Head 11545. 5 active discount codes — save on springs, new door, and opener. Call 516-629-7162.",
  alternates: {
    canonical: "/faq/",
  },
  openGraph: {
    title: `Garage Door FAQ & Coupons Glen Cove NY | ${BUSINESS.phone}`,
    description:
      "5 active coupon codes for garage door service in Glen Cove and Glen Head NY. Springs, new doors, openers, tune-ups.",
    url: `${BUSINESS.siteUrl}/faq/`,
  },
};

const allFaqs = [
  {
    question: "Who repairs garage doors in Glen Cove NY 11542?",
    answer:
      `${BUSINESS.name} provides same-day repair throughout Glen Cove NY 11542, Glen Head 11545, Sea Cliff, and Nassau County North Shore. A real technician answers at ${BUSINESS.phone}.`,
  },
  {
    question: "How much does garage door spring repair cost in Glen Cove?",
    answer:
      "Torsion spring replacement starts from $295. Extension spring (pair + safety cables) from $165. High-cycle (25,000 cycles) from $380 — recommended for households using the garage as the primary entrance. Free written estimate included. Use code SPRING10 for 10% off.",
  },
  {
    question: "Do you repair off-track garage doors same day?",
    answer:
      `Yes — same-day off-track repair throughout Glen Cove 11542 and Glen Head 11545. We carry all hardware to reset, realign, and test in a single visit. Starting from $85. Call ${BUSINESS.phone}.`,
  },
  {
    question: "What garage door opener is best for a Glen Head split-level home?",
    answer:
      "The LiftMaster 87504 belt drive is the right opener for split-level homes where the garage sits directly below a bedroom. The steel-reinforced belt produces zero metal-on-metal contact and runs quietly at any hour. It also includes battery backup — important for North Shore storm season.",
  },
  {
    question: "What is a wall-mount (jackshaft) garage door opener?",
    answer:
      "A jackshaft opener mounts on the wall beside the torsion shaft, with no overhead rail at all. This is the solution for low-ceiling Glen Cove cape cod homes (7–8 ft ceiling height) that cannot fit a standard rail opener. The LiftMaster 8500W frees up the entire ceiling for storage and includes battery backup.",
  },
  {
    question: "How does Hempstead Harbor salt air affect garage door hardware?",
    answer:
      "Salt air from Hempstead Harbor and Long Island Sound accelerates corrosion on standard steel cables, spring coils, and hinges significantly faster than inland Nassau County. We specify galvanized steel cables as standard for all Glen Cove and Glen Head installations, and stainless steel for the most exposed waterfront properties near Cove Avenue.",
  },
  {
    question: "What types of garage doors do you install?",
    answer:
      "We install single and double insulated steel doors, carriage house composite overlay doors, glass and aluminum contemporary doors, and custom estate/oversize doors. Brands include Clopay, Amarr, and Wayne Dalton. Every installation in Glen Cove includes a coastal hardware assessment.",
  },
  {
    question: "How much does a new garage door cost in Glen Cove?",
    answer:
      "Single insulated steel starts from $650. Double insulated steel from $950. Carriage house composite overlay from $1,200. Glass and aluminum contemporary from $1,800. Custom estate doors — call for pricing. Free in-home estimate included. Use code NEWDOOR250 for $250 off.",
  },
  {
    question: "Do you offer a free estimate?",
    answer:
      `Yes — free written estimate on every repair, installation, and opener service. Call ${BUSINESS.phone} or request service online.`,
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Glen Cove NY 11542, Glen Head NY 11545, Sea Cliff NY 11579, Old Brookville, Roslyn Heights NY 11577, and surrounding Nassau County North Shore communities.",
  },
  {
    question: "Do you offer evening and weekend service?",
    answer:
      `Yes — evenings, weekends, and holidays throughout Glen Cove and Glen Head at no extra charge. Call ${BUSINESS.phone} any time.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// Combined pricing reference for the FAQ page
const faqPricingRows = [
  { service: "Torsion Spring Replacement", price: "$295", note: "Starting at" },
  { service: "Extension Spring (Pair + Safety Cables)", price: "$165", note: "Starting at" },
  { service: "High-Cycle Spring (25,000 cycles)", price: "$380", note: "Starting at" },
  { service: "Broken Overhead Cable Repair", price: "$125", note: "Starting at" },
  { service: "Off-Track Repair", price: "$85", note: "Starting at" },
  { service: "Gear & Sprocket Kit Replacement", price: "$130", note: "Starting at" },
  { service: "New LiftMaster Opener", price: "Call", note: "" },
  { service: "New Door (Single Insulated)", price: "$650", note: "Starting at" },
  { service: "22-Point Tune-Up", price: "$99", note: "" },
  { service: "Free Written Estimate", price: "FREE", note: "" },
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <PageHero
          badge="5 Active Discount Codes"
          title="Garage Door Coupons & FAQ —"
          titleAccent="Glen Cove & Glen Head, NY"
          subtitle="5 active discount codes for Glen Cove NY 11542, Glen Head 11545, Sea Cliff, and Nassau County North Shore. Mention the code when you call — no printing required."
          ctaLabel={`Call ${BUSINESS.phone} to Redeem`}
        />
        <TrustBar
          items={[
            { label: "✅ 5 Active Coupons" },
            { label: "📋 Free Written Estimate" },
            { label: "🛡️ Written Warranty" },
            { label: "📞 Call Any Time" },
          ]}
        />

        {/* Coupons section */}
        <section className="py-16 bg-[#f5f5f5]">
          <Container>
            <SectionHeading
              title="Current Coupons — Glen Cove & Glen Head NY"
              subtitle="All codes apply to services throughout Glen Cove, Glen Head, Sea Cliff, Old Brookville, Roslyn Heights, and Nassau County North Shore. One coupon per service."
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {COUPONS.map((c) => (
                <CouponCard key={c.code} {...c} />
              ))}
            </div>
          </Container>
        </section>

        {/* Pricing reference */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#171717] mb-5">
                Pricing Reference — Glen Cove & Glen Head NY
              </h2>
              <PricingTable rows={faqPricingRows} />
              <p className="text-xs text-gray-400 mt-2">
                Prices shown are starting prices. Final price provided in your
                free written estimate.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <a href="/repair/" className="text-[#155b91] font-bold hover:underline">
                  Full repair pricing →
                </a>
                <a href="/garage-door-opener/" className="text-[#155b91] font-bold hover:underline">
                  Full opener pricing →
                </a>
                <a href="/installation/" className="text-[#155b91] font-bold hover:underline">
                  Full installation pricing →
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#f5f5f5]">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#171717] mb-8">
                Frequently Asked Questions — Glen Cove & Glen Head NY
              </h2>
              <FaqAccordion faqs={allFaqs} />
            </div>
          </Container>
        </section>

        <PageCTA
          heading="Questions? Call Us — Glen Cove & Glen Head NY"
          subtext="Free written estimate · Same-day service · Written warranty"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
