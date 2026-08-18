import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-white font-black text-xl mb-2 tracking-tight">
              GARAGE DOORS{" "}
              <span className="text-[#ff7a00]">GLEN COVE NY</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Professional garage door repair, springs, openers, and
              installation for Glen Cove, Glen Head, and Nassau County North Shore.
            </p>
            <p className="text-xs text-gray-600">DBA {BUSINESS.dba}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Garage Door Repair", href: "/repair/" },
                { label: "Spring Repair & Replacement", href: "/repair/" },
                { label: "Opener Repair & Installation", href: "/garage-door-opener/" },
                { label: "Garage Door Installation", href: "/installation/" },
                { label: "FAQ & Coupons", href: "/faq/" },
                { label: "Emergency Service", href: "/#contact" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">
              Service Area
            </h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_AREAS.map((area) => (
                <li key={area.name}>
                  {area.name}
                  {area.zip ? ` ${area.zip}` : ""}
                </li>
              ))}
              <li>Nassau County North Shore</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneHref}`}
                  className="flex items-center gap-2 text-[#ff7a00] font-bold hover:text-[#e06900] transition-colors"
                  aria-label={`Call ${BUSINESS.phone}`}
                >
                  <Phone size={16} />
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <address className="not-italic">
                  {BUSINESS.street}
                  <br />
                  {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                </address>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                { href: "/repair/", label: "Repair" },
                { href: "/faq/", label: "Coupons" },
                { href: "/#contact", label: "Contact" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs text-gray-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights
            reserved.
          </p>
          <p>
            {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.state}{" "}
            {BUSINESS.zip}
          </p>
        </div>
      </div>
    </footer>
  );
}
