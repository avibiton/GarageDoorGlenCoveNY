"use client";

import { useState, useEffect } from "react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#171717]/98 shadow-lg backdrop-blur-sm"
            : "bg-[#171717]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] rounded"
              aria-label={BUSINESS.name}
            >
              <span className="text-white font-black text-lg md:text-xl tracking-tight">
                GARAGE DOORS{" "}
                <span className="text-[#ff7a00]">GLEN COVE NY</span>
              </span>
              <span className="text-gray-400 text-xs hidden sm:block">
                Professional Garage Door Services
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-5" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors focus-visible:outline-none focus-visible:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Phone + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="text-white font-bold text-sm flex items-center gap-1.5 hover:text-[#ff7a00] transition-colors"
              >
                <Phone size={16} className="text-[#ff7a00]" />
                {BUSINESS.phone}
              </a>
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="bg-[#ff7a00] text-white font-bold px-4 py-2 rounded-md text-sm hover:bg-[#e06900] transition-colors"
              >
                Call Now
              </a>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="flex items-center gap-1.5 bg-[#ff7a00] text-white text-sm font-bold px-3 py-2 rounded-md hover:bg-[#e06900] transition-colors"
                aria-label={`Call ${BUSINESS.phone}`}
              >
                <Phone size={16} />
                <span className="hidden xs:inline">{BUSINESS.phone}</span>
                <span className="xs:hidden">Call</span>
              </a>
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
                className="text-gray-300 hover:text-white p-1.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00]"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
