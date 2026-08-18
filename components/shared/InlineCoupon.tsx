import { BUSINESS } from "@/lib/constants";
import { Phone, Scissors } from "lucide-react";

interface InlineCouponProps {
  discount: string;
  service: string;
  subtitle?: string;
  code: string;
  expiry: string;
  accent?: "orange" | "blue";
}

export default function InlineCoupon({
  discount,
  service,
  subtitle,
  code,
  expiry,
  accent = "orange",
}: InlineCouponProps) {
  const accentColor = accent === "orange" ? "#ff7a00" : "#155b91";
  const bgColor = accent === "orange" ? "bg-[#ff7a00]" : "bg-[#155b91]";
  const borderColor = accent === "orange" ? "border-[#ff7a00]" : "border-[#155b91]";
  const textColor = accent === "orange" ? "text-[#ff7a00]" : "text-[#155b91]";

  return (
    <div className={`relative bg-white rounded-2xl border-2 ${borderColor} overflow-hidden shadow-lg max-w-xs`}>
      <div className="absolute top-3 right-3 text-gray-300">
        <Scissors size={16} />
      </div>
      <div className="m-3 rounded-xl border-2 border-dashed" style={{ borderColor: `${accentColor}33` }}>
        <div className={`${bgColor} text-white text-center py-4 rounded-t-lg`}>
          <div className="text-4xl font-black leading-none">{discount}</div>
          <div className="text-xs font-semibold mt-1 opacity-90 uppercase tracking-widest">OFF</div>
        </div>
        <div className="p-4 text-center">
          <p className={`font-black text-base ${textColor} uppercase tracking-tight mb-0.5`}>
            {service}
          </p>
          {subtitle && (
            <p className="text-gray-400 text-xs mb-3">{subtitle}</p>
          )}
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 mb-3">
            <p className="text-xs text-gray-400 mb-0.5">Use code</p>
            <p className="font-black text-[#171717] text-lg tracking-widest">{code}</p>
          </div>
          <a
            href={`tel:${BUSINESS.phoneHref}`}
            className={`inline-flex items-center justify-center gap-2 w-full ${bgColor} text-white font-bold py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1`}
          >
            <Phone size={14} />
            Call to Redeem
          </a>
          <p className="text-xs text-gray-400 mt-2">{expiry} · One per service</p>
        </div>
      </div>
    </div>
  );
}
