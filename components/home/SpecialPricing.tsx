import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { BUSINESS } from "@/lib/constants";
import { Home, Ruler, PenLine, HardHat, Phone } from "lucide-react";

const categories = [
  { icon: Home, label: "New Home Owners" },
  { icon: Ruler, label: "Architects" },
  { icon: PenLine, label: "Designers" },
  { icon: HardHat, label: "Contractors" },
];

export default function SpecialPricing() {
  return (
    <section className="py-20 bg-[#242424]">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Special Pricing Available"
            subtitle="We offer special rates for the following groups. Call us to learn more."
            light
          />

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
              >
                <Icon size={32} className="text-[#ff7a00]" />
                <span className="text-white font-semibold text-sm text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-400 text-sm">
            Ask about our special pricing when you call.
          </p>
          <a
            href={`tel:${BUSINESS.phoneHref}`}
            className="mt-5 inline-flex items-center gap-2 bg-[#ff7a00] text-white font-bold px-7 py-3 rounded-md hover:bg-[#e06900] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#242424]"
          >
            <Phone size={18} />
            Call {BUSINESS.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
