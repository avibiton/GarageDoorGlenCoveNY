import { BUSINESS } from "@/lib/constants";
import { Phone } from "lucide-react";

interface PageCTAProps {
  heading: string;
  subtext?: string;
}

export default function PageCTA({
  heading,
  subtext = "Free written estimate · Same-day service available",
}: PageCTAProps) {
  return (
    <section className="bg-[#171717] py-14 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
          {heading}
        </h2>
        {subtext && (
          <p className="text-gray-400 mb-7">{subtext}</p>
        )}
        <a
          href={`tel:${BUSINESS.phoneHref}`}
          className="inline-flex items-center gap-2 bg-[#ff7a00] text-white font-black text-2xl px-10 py-5 rounded-xl hover:bg-[#e06900] transition-colors shadow-2xl shadow-[#ff7a00]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
        >
          <Phone size={28} />
          {BUSINESS.phone}
        </a>
      </div>
    </section>
  );
}
