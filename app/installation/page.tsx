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
import { BUSINESS, INSTALLATION_PRICING, COUPONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Garage Door Installation Glen Cove NY | Clopay Amarr | ${BUSINESS.phone}`,
  description:
    "New garage door installation in Glen Cove NY 11542 and Glen Head 11545. Clopay, Amarr, Wayne Dalton carriage house, insulated steel, galvanized coastal hardware. $250 off. Call 516-629-7162.",
  alternates: {
    canonical: "/installation/",
  },
  openGraph: {
    title: `Garage Door Installation Glen Cove NY | $250 Off | ${BUSINESS.phone}`,
    description:
      "New garage door installation in Glen Cove and Glen Head NY. Carriage house, insulated steel, galvanized coastal hardware. $250 off. Free in-home estimate.",
    url: `${BUSINESS.siteUrl}/installation/`,
  },
};

const installParts = [
  "Insulated Triple-Layer Steel",
  "Carriage House Style",
  "Composite Overlay",
  "Galvanized Steel Panel",
  "Glass & Aluminum",
  "Bottom Seal",
  "Side Seal (Astragal)",
  "Top Seal",
  "Weather Stripping",
  "Steel Strut",
  "Center Stile",
];

const newdoor250 = COUPONS.find((c) => c.code === "NEWDOOR250")!;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Garage Door Installation",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    url: BUSINESS.siteUrl,
  },
  areaServed: ["Glen Cove NY", "Glen Head NY", "Sea Cliff NY"],
  description:
    "Professional installation of residential and carriage house garage doors with coastal hardware for Glen Cove and Nassau County North Shore.",
};

export default function InstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <PageHero
          badge="$250 Off New Door"
          title="Garage Door Installation —"
          titleAccent="Glen Cove, NY"
          subtitle="Clopay, Amarr & Wayne Dalton carriage house, insulated steel, and glass & aluminum installation throughout Glen Cove NY 11542, Glen Head 11545, Sea Cliff, and Nassau County North Shore. Free in-home estimate."
          ctaLabel={`Call ${BUSINESS.phone} — $250 Off New Door`}
          bgImage="https://images.unsplash.com/photo-1783125127341-81112b795c23?w=1920&q=80&auto=format&fit=crop"
        />
        <TrustBar
          items={[
            { label: "✅ Free In-Home Estimate" },
            { label: "🏠 Clopay · Amarr · Wayne Dalton" },
            { label: "🛡️ Written Warranty" },
            { label: "🌊 Coastal Hardware Assessment" },
          ]}
        />

        <section className="py-16 bg-white">
          <Container>
            <SectionHeading
              title="Garage Door Installation Glen Cove & Glen Head, NY"
              subtitle={"New door installation tailored to Glen Cove's diverse housing stock."}
            />

            <div className="mt-10 max-w-4xl mx-auto space-y-8 text-gray-600 leading-relaxed">
              <p>
                Glen Cove garage door replacement falls into three distinct
                categories. The working-class colonials and capes throughout{" "}
                <strong>Glen Cove City</strong> near Forest Avenue and Glen Street
                replace doors when accumulated hardware wear makes repair
                uneconomical — often after 40–50 years of Nassau County North
                Shore winters. The split-level and colonial homes in{" "}
                <strong>Glen Head 11545</strong> replace doors primarily for energy
                efficiency and noise reduction, upgrading original builder-grade
                steel to insulated triple-layer construction. And the Gold Coast
                estate properties on <strong>Dosoris Lane</strong> and the
                Hempstead Harbor waterfront replace doors as part of architectural
                renovations where the garage door must match a custom-designed home.
              </p>
              <p>
                Every Glen Cove installation includes a{" "}
                <strong>coastal hardware assessment</strong>: we evaluate the salt
                air exposure at your specific address and specify the correct
                hardware for that environment. Properties within three blocks of
                Hempstead Harbor receive galvanized steel panel construction and
                stainless steel cable specifications as standard. Interior Glen
                Cove and Glen Head properties receive standard insulated steel
                panel construction with galvanized cables — the full performance
                benefit without the coastal premium.
              </p>

              <div>
                <h2 className="text-xl font-bold text-[#171717] mb-3">
                  Carriage House Style — Glen Cove Gold Coast Aesthetic
                </h2>
                <p>
                  Glen Cove&apos;s architectural heritage — from the Victorian and
                  Colonial Revival homes in the historic neighborhoods to the
                  mid-century estate construction on Dosoris Lane — is perfectly
                  complemented by carriage house garage doors. The deep woodgrain
                  steel embossing and period strap hardware in oil-rubbed bronze
                  or hand-forged black iron recall the original Gold Coast carriage
                  house aesthetic. Clopay&apos;s Reserve Collection and Amarr&apos;s
                  Hillcrest series are the most requested in Glen Cove — both
                  achieve the period look without the maintenance demands of actual
                  timber.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#171717] mb-3">
                  Insulated Triple-Layer Steel — Glen Head Attached Garages
                </h2>
                <p>
                  Glen Head&apos;s 1960s and 1970s colonials and split-levels on{" "}
                  <strong>Glenwood Road</strong> and{" "}
                  <strong>Cedar Swamp Road</strong> have attached garages sharing
                  walls with the main living areas. Long Island Sound&apos;s winter wind
                  creates significant heat loss through single-layer builder-grade
                  steel doors. A{" "}
                  <strong>triple-layer insulated door with R-12 polyurethane foam core</strong>{" "}
                  reduces thermal transfer and lowers the noise that residents of
                  Glen Head split-levels experience from their garage.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#171717] mb-3">
                  Galvanized Steel — Hempstead Harbor Properties
                </h2>
                <p>
                  For Glen Cove properties on <strong>Cove Avenue</strong>, the
                  harbor-facing streets, and any address within half a mile of
                  Hempstead Harbor, we specify{" "}
                  <strong>galvanized steel panel construction</strong> as the
                  minimum for new door installations. Standard steel panel corrodes
                  at the fold lines and bottom section within 10–15 years of salt
                  air exposure. Galvanized panel construction extends that service
                  life to 20+ years. For the most exposed waterfront addresses, we
                  discuss full stainless hardware packages during the in-home
                  estimate.
                </p>
              </div>
            </div>

            {/* Parts */}
            <div className="mt-10 max-w-4xl mx-auto">
              <PartTagCloud tags={installParts} />
            </div>

            {/* Pricing */}
            <div className="mt-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#171717] mb-5">
                Installation Pricing — Glen Cove & Glen Head NY
              </h2>
              <PricingTable rows={INSTALLATION_PRICING} showLead />
              <p className="text-xs text-gray-400 mt-2">
                Prices shown are starting prices. Lead times are typical estimates,
                not guarantees. Free in-home estimate included.
              </p>
            </div>

            {/* Coupon */}
            <div className="mt-10 max-w-4xl mx-auto">
              <h3 className="text-lg font-bold text-[#171717] mb-5">
                Installation Coupon — Glen Cove NY
              </h3>
              <InlineCoupon {...newdoor250} />
            </div>

            {/* Internal links */}
            <div className="mt-8 max-w-4xl mx-auto flex flex-col sm:flex-row gap-3">
              <div className="flex-1 bg-[#f5f5f5] rounded-xl p-4 border border-gray-200 text-sm text-gray-600">
                Need an opener with your new door?{" "}
                <a href="/garage-door-opener/" className="text-[#155b91] font-bold hover:underline">
                  View opener service →
                </a>
              </div>
              <div className="flex-1 bg-[#f5f5f5] rounded-xl p-4 border border-gray-200 text-sm text-gray-600">
                See all current coupons and savings.{" "}
                <a href="/faq/" className="text-[#155b91] font-bold hover:underline">
                  View FAQ & Coupons →
                </a>
              </div>
            </div>
          </Container>
        </section>

        <PageCTA
          heading="New Door Installation — Glen Cove & Glen Head NY"
          subtext="$250 off · Free in-home estimate · Coastal hardware assessment included"
        />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
