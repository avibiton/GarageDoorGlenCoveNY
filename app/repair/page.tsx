import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import PricingTable from "@/components/shared/PricingTable";
import FaqAccordion from "@/components/shared/FaqAccordion";
import PartTagCloud from "@/components/shared/PartTagCloud";
import InlineCoupon from "@/components/shared/InlineCoupon";
import PageCTA from "@/components/shared/PageCTA";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BUSINESS, REPAIR_PRICING, COUPONS } from "@/lib/constants";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: `Garage Door Repair Glen Cove NY | Springs Cables Off-Track | ${BUSINESS.phone}`,
  description:
    "Same-day garage door repair in Glen Cove NY 11542 and Glen Head 11545. Torsion spring, broken cable, off-track door, rollers, and more. Free estimate. Call 516-629-7162.",
  alternates: {
    canonical: "/repair/",
  },
  openGraph: {
    title: `Garage Door Repair Glen Cove NY | Same Day | ${BUSINESS.phone}`,
    description:
      "Same-day garage door repair in Glen Cove and Glen Head NY. Springs, cables, off-track doors. Free written estimate.",
    url: `${BUSINESS.siteUrl}/repair/`,
  },
};

const repairParts = [
  "Torsion Spring",
  "Extension Spring",
  "High-Cycle Spring",
  "Lifting Cable",
  "Galvanized Cable",
  "Stainless Steel Cable",
  "Cable Drum",
  "Drum Bracket",
  "Bearing Plate",
  "Nylon Roller",
  "Vertical Track",
  "Track Bracket",
  "Hinge #1–#4",
  "Bottom Bracket",
  "Bottom Seal",
  "Safety Sensor",
  "Spring Safety Cable",
];

const repairFaqs = [
  {
    question: "How fast can you fix a broken spring in Glen Cove NY?",
    answer:
      "Same-day torsion spring repair throughout Glen Cove 11542 and Glen Head 11545. We dispatch within 2–4 hours and carry all spring sizes. Starting from $295. Use code SPRING10 for 10% off. Call " + BUSINESS.phone + ".",
  },
  {
    question: "Do you repair off-track garage doors same day in Glen Cove?",
    answer:
      "Yes — same-day off-track repair throughout Glen Cove and Glen Head. We carry all hardware to reset, realign, and test in a single visit. Starting from $85. Call " + BUSINESS.phone + ".",
  },
  {
    question: "How does Hempstead Harbor salt air affect garage door cables?",
    answer:
      "Salt air from Hempstead Harbor accelerates corrosion on standard steel lifting cables, particularly near the bottom drum bracket. We use galvanized cables as standard for all Glen Cove and Glen Head installations, and stainless steel for waterfront properties near Cove Avenue. Call " + BUSINESS.phone + ".",
  },
  {
    question: "Do you repair estate garage doors on Dosoris Lane in Glen Cove?",
    answer:
      "Yes — we service custom carriage house doors, heavy estate garage systems, and three-car configurations on Dosoris Lane and throughout Glen Cove's Gold Coast properties. Commercial-weight springs and hardware on every truck. Call " + BUSINESS.phone + ".",
  },
  {
    question: "Do you offer evening and weekend service in Glen Cove?",
    answer:
      "Yes — evenings, weekends, and holidays throughout Glen Cove and Glen Head at no extra charge. Call " + BUSINESS.phone + " any time.",
  },
];

const spring10 = COUPONS.find((c) => c.code === "SPRING10")!;
const free911 = COUPONS.find((c) => c.code === "FREE911")!;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: repairFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <PageHero
          badge="Same-Day Emergency Service"
          title="Garage Door Repair"
          titleAccent="Glen Cove, NY"
          subtitle="Broken torsion spring, snapped cable, off-track door — we fix it same day throughout Glen Cove NY 11542, Glen Head 11545, Sea Cliff, and Nassau County North Shore. Free written estimate."
          ctaLabel={`Call ${BUSINESS.phone} — Free Estimate`}
        />
        <TrustBar
          items={[
            { label: "✅ Same-Day Dispatch" },
            { label: "📋 Free Written Estimate" },
            { label: "🛡️ Written Warranty on Every Repair" },
            { label: "📞 Real Technician Answers" },
          ]}
        />

        {/* Main content */}
        <section className="py-16 bg-white">
          <Container>
            <SectionHeading
              title="Garage Door Repair — What We Fix Every Day"
              subtitle={"Glen Cove and Glen Head's most complete same-day repair service."}
            />

            <div className="mt-10 max-w-4xl mx-auto space-y-8 text-gray-600 leading-relaxed">
              <p>
                Glen Cove&apos;s range of housing stock — original 1940s cape cods near{" "}
                <strong>Continental Place</strong> and <strong>Pulaski Street</strong>,
                postwar colonials off <strong>Forest Avenue</strong>, and custom estate
                garages on <strong>Dosoris Lane</strong> — means we work on systems
                ranging from original extension springs on low-ceiling capes to
                commercial-weight torsion systems on Gold Coast estate garages.
                Every type, every size, same-day throughout Glen Cove 11542 and
                Glen Head 11545.
              </p>
              <p>
                What distinguishes Glen Cove repair work is the{" "}
                <strong>Hempstead Harbor salt air factor</strong>. We arrive at every
                Glen Cove service call expecting to find accelerated hardware
                corrosion — particularly on the <strong>lifting cable</strong> near
                the bottom drum bracket, where humidity concentrates. For properties
                on <strong>Cove Avenue</strong> and the harbor-facing streets, we
                carry stainless steel cables. For the residential interior of Glen
                Cove and Glen Head, galvanized steel cables are our standard.
              </p>

              {/* Warning box */}
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 flex items-start gap-4">
                <AlertTriangle size={22} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-800 mb-1">Stop using your door if:</p>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    You heard a loud bang · The door hangs lower on one side · The
                    opener runs without the door moving · The door is visibly
                    off-track. Call{" "}
                    <a href={`tel:${BUSINESS.phoneHref}`} className="font-bold underline">
                      {BUSINESS.phone}
                    </a>{" "}
                    immediately — same-day service in Glen Cove.
                  </p>
                </div>
              </div>

              {/* Sub-sections */}
              <div>
                <h2 className="text-xl font-bold text-[#171717] mb-3">
                  Broken Torsion Spring — Glen Cove Emergency Repair
                </h2>
                <p>
                  Glen Cove&apos;s North Shore winters create the conditions for torsion
                  spring failure — metal contracts in cold temperatures, and a spring
                  near its cycle limit often snaps on the first truly cold morning of
                  the season. A broken{" "}
                  <strong>torsion spring</strong> makes the door dangerous deadweight.
                  Do not operate the opener. We provide same-day emergency spring
                  replacement starting from $295. Use code{" "}
                  <strong>SPRING10</strong> for 10% off.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#171717] mb-3">
                  Broken Overhead Cable — Cable Drum Replacement
                </h2>
                <p>
                  A broken overhead cable causes the door to drop suddenly on one
                  side, pulling rollers off the{" "}
                  <strong>vertical track</strong>. On Hempstead Harbor waterfront
                  properties, cable failures often originate from corrosion that
                  develops invisibly inside the cable strands — the cable looks intact
                  on the surface while internal strands have weakened. We carry
                  complete <strong>cable drum replacement</strong> kits and both
                  galvanized and stainless cables on every service truck. Cable repair
                  from $125. Use code <strong>FREE911</strong> for a free service call.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#171717] mb-3">
                  Off-Track Garage Door Repair — Glen Cove NY
                </h2>
                <p>
                  An off-track door cannot be safely forced back into position — a
                  common mistake that bends the vertical track and creates a more
                  expensive repair. We assess the cause before touching anything:
                  snapped cable, worn roller stem, impact damage, or track bracket
                  failure. Glen Cove estate garages with heavier custom doors require
                  a controlled reset process. Starting from $85.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#171717] mb-3">
                  Roller, Hinge & Hardware Repair — Glen Head NY
                </h2>
                <p>
                  Glen Head&apos;s 1960s and 1970s split-levels and colonials on{" "}
                  <strong>Glen Head Road</strong> and{" "}
                  <strong>Glenwood Landing Road</strong> have metal rollers that
                  create grinding noise — particularly audible where the garage sits
                  beneath a bedroom or beside the kitchen. We upgrade to{" "}
                  <strong>sealed nylon ball-bearing rollers</strong> that eliminate
                  grinding and run maintenance-free. Hinge replacement —
                  particularly <strong>hinge #2</strong> and <strong>#3</strong>,
                  which bear the most stress — smooths door operation and reduces
                  opener strain.
                </p>
              </div>
            </div>

            {/* Parts tag cloud */}
            <div className="mt-10 max-w-4xl mx-auto">
              <PartTagCloud tags={repairParts} />
            </div>

            {/* Pricing */}
            <div className="mt-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#171717] mb-5">
                Repair Pricing — Glen Cove & Glen Head NY
              </h2>
              <PricingTable rows={REPAIR_PRICING} />
              <p className="text-xs text-gray-400 mt-2">
                Prices shown are starting prices. Final price provided in your
                free written estimate.
              </p>
            </div>

            {/* Inline coupons */}
            <div className="mt-10 max-w-4xl mx-auto">
              <h3 className="text-lg font-bold text-[#171717] mb-5">
                Coupons — Repair Glen Cove NY
              </h3>
              <div className="flex flex-wrap gap-5">
                <InlineCoupon {...spring10} />
                <InlineCoupon {...free911} />
              </div>
            </div>

            {/* Internal link */}
            <div className="mt-8 max-w-4xl mx-auto bg-[#f5f5f5] rounded-xl p-4 border border-gray-200 text-sm text-gray-600">
              Need a new opener too?{" "}
              <a href="/garage-door-opener/" className="text-[#155b91] font-bold hover:underline">
                View our garage door opener service →
              </a>
            </div>

            {/* FAQ */}
            <div className="mt-14 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#171717] mb-6">
                FAQ — Repair Glen Cove NY
              </h2>
              <FaqAccordion faqs={repairFaqs} />
            </div>
          </Container>
        </section>

        <PageCTA
          heading="Same-Day Repair in Glen Cove & Glen Head NY"
          subtext="Free written estimate · Written warranty on every repair"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
