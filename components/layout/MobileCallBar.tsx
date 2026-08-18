import { BUSINESS } from "@/lib/constants";
import { Phone, ClipboardList } from "lucide-react";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#171717] border-t border-white/10 flex shadow-2xl">
      <a
        href={`tel:${BUSINESS.phoneHref}`}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#ff7a00] text-white font-bold hover:bg-[#e06900] transition-colors focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-white"
        aria-label={`Call us at ${BUSINESS.phone}`}
      >
        <Phone size={20} />
        <span className="text-xs">Call Now</span>
      </a>
      <a
        href="#contact"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#155b91] text-white font-bold hover:bg-[#0e4470] transition-colors focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Request service"
      >
        <ClipboardList size={20} />
        <span className="text-xs">Request Service</span>
      </a>
    </div>
  );
}
