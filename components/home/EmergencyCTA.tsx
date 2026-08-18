import { BUSINESS } from "@/lib/constants";
import { Phone, Clock, Zap } from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section className="py-20 bg-[#171717] relative overflow-hidden">
      {/* Decorative accent */}
      <div
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ff7a00 0, #ff7a00 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#ff7a00]/20 border border-[#ff7a00]/40 rounded-full px-4 py-1.5 mb-6">
          <Zap size={14} className="text-[#ff7a00]" />
          <span className="text-[#ff7a00] text-sm font-semibold">
            Emergency Garage Door Service
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          Garage Door Problem?{" "}
          <span className="text-[#ff7a00]">Call Us Today</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
          Don&apos;t let a broken garage door disrupt your day. We offer same-day repairs
          and 24-hour emergency service throughout Glen Cove and Long Island.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-gray-300">
            <Clock size={18} className="text-[#ff7a00]" />
            <span>24-Hour Emergency Service</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-2 text-gray-300">
            <Phone size={18} className="text-[#ff7a00]" />
            <span>Same-Day Repairs Available</span>
          </div>
        </div>

        <a
          href={`tel:${BUSINESS.phoneHref}`}
          className="inline-flex items-center justify-center gap-3 bg-[#ff7a00] text-white font-black text-2xl md:text-3xl px-10 py-5 rounded-xl hover:bg-[#e06900] transition-colors shadow-2xl shadow-[#ff7a00]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
          aria-label={`Call ${BUSINESS.phone}`}
        >
          <Phone size={32} />
          {BUSINESS.phone}
        </a>
      </div>
    </section>
  );
}
