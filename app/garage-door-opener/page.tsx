import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import PageHero from "@/components/shared/PageHero";
import TrustBar from "@/components/shared/TrustBar";
import PricingTable from "@/components/shared/PricingTable";
import PartTagCloud from "@/components/shared/PartTagCloud";
import InlineCoupon from "@/components/shared/InlineCoupon";
import PageCTA from "@/components/shared/PageCTA";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BUSINESS, OPENER_PRICING, COUPONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Garage Door Opener Repair & Installation Glen Cove NY | LiftMaster | ${BUSINESS.phone}`,
  description:
    "Garage door opener repair and installation in Glen Cove NY 11542. LiftMaster belt drive, wall-mount jackshaft, MyQ smart WiFi, battery backup. Free estimate. Call 516-629-7162.",
  alternates: {
    canonical: "/garage-door-opener/",
  },
  openGraph: {
    title: `Garage Door Opener Glen Cove NY | LiftMaster MyQ | ${BUSINESS.phone}`,
    description:
      "Opener repair and installation in Glen Cove and Glen Head NY. Belt drive, wall-mount, gear & sprocket, battery backup. Free estimate.",
    url: `${BUSINESS.siteUrl}/garage-door-opener/`,
  },
};

const openerParts = [
  "Belt Drive Opener",
  "Wall-Mount Jackshaft",
  "Chain Drive Opener",
  "Main Drive Gear",
  "Gear & Sprocket Kit",
  "Logic Board",
  "Safety Sensor",
  "Battery Backup",
  "MyQ Smart Hub",
  "Remote Control",
  "Wireless Keypad",
  "HomeLink",
  "Trolley",
  "Rail",
  "Wall Button",
];

const opener99 = COUPONS.find((c) => c.code === "OPENER99")!;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Garage Door Opener Repair and Installation",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    url: BUSINESS.siteUrl,
  },
  areaServed: ["Glen Cove NY", "Glen Head NY", "Sea Cliff NY"],
  description:
    "LiftMaster and Genie opener installation, belt drive conversions, gear and sprocket replacement, and battery backup setup.",
};

export default function OpenerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <PageHero
          badge="LiftMaster & Genie Service"
          title="Garage Door Opener Repair & Installation —"
          titleAccent="Glen Cove, NY"
          subtitle="Belt drive for quiet Glen Head split-levels, wall-mount for low-ceiling Glen Cove capes, battery backup for North Shore storms. Same-day service throughout Glen Cove NY 11542 and Glen Head 11545. $99 off any new opener."
          ctaLabel={`Call ${BUSINESS.phone} — $99 Off Opener`}
          bgImage="/images/openers.jpg"
        />
        <TrustBar
          items={[
            { label: "✅ LiftMaster & Genie Service" },
            { label: "📋 Free Written Estimate" },
            { label: "🛡️ Written Warranty" },
            { label: "📱 MyQ Smart Setup" },
          ]}
        />

        <section className="py-16 bg-white">
          <Container>
            <SectionHeading
              title="Opener Repair & Installation — Same Day"
              subtitle={"Glen Cove and Glen Head's most common opener problems — and how we solve them."}
            />

            <div className="mt-10 max-w-4xl mx-auto space-y-8 text-gray-600 leading-relaxed">
              <p>
                Glen Cove and Glen Head present two distinct opener service
                scenarios. The first is <strong>gear failure from age</strong> —
                the original 1950s and 1960s capes near{" "}
                <strong>School Street</strong> and{" "}
                <strong>Continental Place</strong> in Glen Cove often have openers
                running for 15–20 years. The{" "}
                <strong>main drive gear</strong> — the nylon component inside the
                opener head that transmits motor torque to the drive mechanism —
                wears through the teeth progressively. The second scenario is{" "}
                <strong>noise from the wrong opener type</strong> — Glen Head&apos;s
                split-level homes with garages directly beneath bedrooms suffer
                significantly from chain drive vibration at early morning hours.
              </p>

              <div>
                <h2 className="text-xl font-bold text-[#171717] mb-3">
                  Gear & Sprocket Kit — Most Common Opener Repair
                </h2>
                <p>
                  When a Glen Cove or Glen Head opener motor runs audibly but the
                  door does not move, <strong>Gear & Sprocket Kit</strong>{" "}
                  replacement is the diagnosis in nearly every case. We stock kits
                  for LiftMaster, Genie, Chamberlain, and Craftsman on every
                  service truck. Replacement takes 45–60 minutes on-site. Starting
                  from $130. Same-day service throughout Glen Cove 11542 and Glen
                  Head 11545.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#171717] mb-3">
                  LiftMaster Belt Drive — Glen Head Split-Levels
                </h2>
                <p>
                  The <strong>LiftMaster 87504 belt drive</strong> is the right
                  opener for Glen Head&apos;s split-level homes where the garage sits
                  directly below the master bedroom. The steel-reinforced belt
                  produces zero metal-on-metal contact and runs quietly at any
                  hour. For Glen Cove&apos;s larger estate garages on{" "}
                  <strong>Dosoris Lane</strong>, the belt drive handles heavier
                  doors reliably. Integrated{" "}
                  <strong>battery backup</strong> keeps the door operational during
                  Long Island Sound nor&apos;easters, and{" "}
                  <strong>MyQ smart connectivity</strong> allows remote monitoring
                  from anywhere.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#171717] mb-3">
                  Wall-Mount Jackshaft — Glen Cove Low-Ceiling Capes
                </h2>
                <p>
                  Glen Cove&apos;s original cape cod homes — particularly those built in
                  the late 1940s near <strong>Pulaski Street</strong> and{" "}
                  <strong>Brewster Street</strong> — have garage ceiling heights of
                  7 to 8 feet that cannot accommodate a standard overhead rail
                  opener. The{" "}
                  <strong>LiftMaster 8500W jackshaft opener</strong> mounts on the
                  wall beside the torsion shaft with no overhead rail, freeing the
                  entire ceiling for storage. It is our quietest installation,
                  includes battery backup and a built-in deadbolt lock, and
                  qualifies for full MyQ smart connectivity.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#171717] mb-3">
                  Battery Backup — North Shore Storm Season
                </h2>
                <p>
                  Long Island Sound nor&apos;easters hit Glen Cove and Glen Head
                  directly from the north, knocking out power across Nassau
                  County&apos;s North Shore for hours or days. Without battery backup,
                  your garage door is inaccessible and unsecurable during an
                  outage. The <strong>LiftMaster 87504</strong> includes battery
                  backup built in. For existing compatible openers, we offer
                  battery backup add-on installation. We consider battery backup
                  essential for every Glen Cove and Glen Head garage.
                </p>
              </div>
            </div>

            {/* Parts */}
            <div className="mt-10 max-w-4xl mx-auto">
              <PartTagCloud tags={openerParts} />
            </div>

            {/* Pricing */}
            <div className="mt-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#171717] mb-5">
                Opener Pricing — Glen Cove & Glen Head NY
              </h2>
              <PricingTable rows={OPENER_PRICING} />
              <p className="text-xs text-gray-400 mt-2">
                Prices shown are starting prices. Final price provided in your
                free written estimate.
              </p>
            </div>

            {/* Coupon */}
            <div className="mt-10 max-w-4xl mx-auto">
              <h3 className="text-lg font-bold text-[#171717] mb-5">
                Opener Coupon — Glen Cove NY
              </h3>
              <InlineCoupon {...opener99} />
            </div>

            {/* Internal links */}
            <div className="mt-8 max-w-4xl mx-auto flex flex-col sm:flex-row gap-3">
              <div className="flex-1 bg-[#f5f5f5] rounded-xl p-4 border border-gray-200 text-sm text-gray-600">
                Need a new garage door too?{" "}
                <a href="/installation/" className="text-[#155b91] font-bold hover:underline">
                  View door installation →
                </a>
              </div>
              <div className="flex-1 bg-[#f5f5f5] rounded-xl p-4 border border-gray-200 text-sm text-gray-600">
                Broken spring or cable?{" "}
                <a href="/repair/" className="text-[#155b91] font-bold hover:underline">
                  View all repair services →
                </a>
              </div>
            </div>
          </Container>
        </section>

        <PageCTA
          heading="Opener Service in Glen Cove & Glen Head NY"
          subtext="$99 off new LiftMaster or Genie · Same-day · Free written estimate"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
