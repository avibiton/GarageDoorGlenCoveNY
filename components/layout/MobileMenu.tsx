"use client";

import { useEffect } from "react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { X, Phone } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div
        className="absolute right-0 top-0 h-full w-72 bg-[#171717] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="text-white font-bold text-lg">{BUSINESS.name}</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-gray-400 hover:text-white transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00]"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block px-6 py-3 text-gray-200 hover:text-white hover:bg-white/5 transition-colors text-lg font-medium focus-visible:outline-none focus-visible:bg-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-5 border-t border-white/10">
          <a
            href={`tel:${BUSINESS.phoneHref}`}
            className="flex items-center justify-center gap-2 w-full bg-[#ff7a00] text-white font-bold py-3 px-4 rounded-md hover:bg-[#e06900] transition-colors"
          >
            <Phone size={20} />
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
