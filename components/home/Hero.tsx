import { BUSINESS } from "@/lib/constants";
import { Phone, CheckCircle2 } from "lucide-react";

const badges = ["Same Day Service", "24-Hour Emergency Service", "Professional Technicians"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#171717]"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1770756051811-1612ac8bedfa?w=1920&q=80&auto=format&fit=crop)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#171717]/95 via-[#171717]/80 to-[#171717]/50"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#ff7a00]/20 border border-[#ff7a00]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff7a00] animate-pulse" />
            <span className="text-[#ff7a00] text-sm font-semibold">
              Glen Cove & Long Island
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Garage Door Repair{" "}
            <span className="text-[#ff7a00]">Glen Cove, NY</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Professional garage door repairs, spring replacement, opener
            installation, and emergency service — when you need it most.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {badges.map((b) => (
              <div
                key={b}
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5"
              >
                <CheckCircle2 size={14} className="text-[#ff7a00] shrink-0" />
                <span className="text-white text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${BUSINESS.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 bg-[#ff7a00] text-white font-bold text-lg px-8 py-4 rounded-md hover:bg-[#e06900] transition-colors shadow-lg shadow-[#ff7a00]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
            >
              <Phone size={22} />
              Call {BUSINESS.phone}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-md hover:bg-white hover:text-[#171717] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
            >
              Request Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
