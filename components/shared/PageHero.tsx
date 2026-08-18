import { BUSINESS } from "@/lib/constants";
import { Phone } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  ctaLabel?: string;
  bgImage?: string;
}

export default function PageHero({
  badge,
  title,
  titleAccent,
  subtitle,
  ctaLabel = `Call ${BUSINESS.phone} — Free Estimate`,
  bgImage,
}: PageHeroProps) {
  return (
    <section className="relative bg-[#171717] pt-32 pb-16 overflow-hidden">
      {bgImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#171717]/95 via-[#171717]/85 to-[#171717]/60"
            aria-hidden="true"
          />
        </>
      ) : (
        /* Subtle diagonal pattern fallback */
        <div
          className="absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ff7a00 0, #ff7a00 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {badge && (
          <div className="inline-flex items-center gap-2 bg-[#ff7a00]/20 border border-[#ff7a00]/40 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#ff7a00] animate-pulse" />
            <span className="text-[#ff7a00] text-sm font-semibold">{badge}</span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
          {title}{" "}
          {titleAccent && (
            <span className="text-[#ff7a00]">{titleAccent}</span>
          )}
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mb-8 leading-relaxed">
          {subtitle}
        </p>

        <a
          href={`tel:${BUSINESS.phoneHref}`}
          className="inline-flex items-center gap-2 bg-[#ff7a00] text-white font-bold px-7 py-4 rounded-md hover:bg-[#e06900] transition-colors shadow-lg shadow-[#ff7a00]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
        >
          <Phone size={20} />
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
