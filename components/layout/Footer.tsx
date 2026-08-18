import { BUSINESS } from "@/lib/constants";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-white font-black text-xl mb-2 tracking-tight">
              GARAGE DOORS{" "}
              <span className="text-[#ff7a00]">GLEN COVE NY</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Professional garage door repair, springs, openers, and
              installation services for the Glen Cove and Long Island area.
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
                "Garage Door Repair",
                "Spring Repair & Replacement",
                "Opener Repair & Installation",
                "Garage Door Installation",
                "Garage Door Locks",
                "Residential & Commercial",
                "Emergency Service",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
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
            <div className="mt-5 flex gap-3">
              {[
                { href: "#services", label: "Services" },
                { href: "#coupons", label: "Coupons" },
                { href: "#contact", label: "Contact" },
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
