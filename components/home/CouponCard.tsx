import { BUSINESS } from "@/lib/constants";
import { Phone, Scissors } from "lucide-react";

interface CouponCardProps {
  discount: string;
  service: string;
  description?: string;
  accent?: "orange" | "blue";
}

export default function CouponCard({
  discount,
  service,
  description,
  accent = "orange",
}: CouponCardProps) {
  const accentColor = accent === "orange" ? "#ff7a00" : "#155b91";
  const borderColor =
    accent === "orange" ? "border-[#ff7a00]" : "border-[#155b91]";
  const textColor =
    accent === "orange" ? "text-[#ff7a00]" : "text-[#155b91]";
  const bgColor =
    accent === "orange" ? "bg-[#ff7a00]" : "bg-[#155b91]";

  return (
    <div
      className={`relative bg-white rounded-2xl border-2 ${borderColor} overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}
    >
      {/* Scissor cut indicator */}
      <div className="absolute top-3 right-3 text-gray-300">
        <Scissors size={18} />
      </div>

      {/* Dashed border inner */}
      <div
        className={`m-3 rounded-xl border-2 border-dashed border-opacity-30`}
        style={{ borderColor: accentColor }}
      >
        {/* Discount badge */}
        <div
          className={`${bgColor} text-white text-center py-5 rounded-t-lg`}
        >
          <div className="text-5xl font-black leading-none">{discount}</div>
          <div className="text-sm font-semibold mt-1 opacity-90 uppercase tracking-widest">
            OFF
          </div>
        </div>

        {/* Body */}
        <div className="p-4 text-center">
          <p className={`font-black text-lg ${textColor} mb-1 uppercase tracking-tight`}>
            {service}
          </p>
          {description && (
            <p className="text-gray-500 text-sm mb-4">{description}</p>
          )}
          <p className="text-xs text-gray-400 mb-3">
            For internet/website customers. Call to redeem.
          </p>
          <a
            href={`tel:${BUSINESS.phoneHref}`}
            className={`inline-flex items-center justify-center gap-2 w-full ${bgColor} text-white font-bold py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1`}
            style={{ focusRingColor: accentColor } as React.CSSProperties}
            aria-label={`Call to redeem ${discount} off ${service}`}
          >
            <Phone size={16} />
            Call to Redeem
          </a>
        </div>
      </div>
    </div>
  );
}
