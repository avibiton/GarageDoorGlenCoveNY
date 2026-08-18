import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BUSINESS } from "@/lib/constants";
import ContactForm from "./ContactForm";
import { Phone, MapPin, Clock, Zap } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#f5f5f5]">
      <Container>
        <div className="mb-12 text-center">
          <SectionHeading
            title="Request Service"
            subtitle="Fill out the form below and we'll get back to you quickly. For fastest service, call us directly."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left: info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="font-bold text-[#171717] text-lg mb-5">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${BUSINESS.phoneHref}`}
                    className="flex items-center gap-3 group"
                    aria-label={`Call ${BUSINESS.phone}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#ff7a00]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ff7a00] transition-colors">
                      <Phone
                        size={18}
                        className="text-[#ff7a00] group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Phone</p>
                      <p className="font-bold text-[#ff7a00] text-lg">
                        {BUSINESS.phone}
                      </p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#155b91]/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#155b91]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Address</p>
                    <address className="not-italic text-[#171717] font-medium text-sm leading-snug">
                      {BUSINESS.street}
                      <br />
                      {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                    </address>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#171717] rounded-2xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={18} className="text-[#ff7a00]" />
                <h3 className="font-bold text-white text-lg">
                  Emergency Service
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-5">
                Don&apos;t wait for email when you have an emergency. Call us directly
                for immediate 24-hour service.
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-5">
                <Clock size={16} className="text-[#ff7a00]" />
                <span>24-Hour Emergency Service Available</span>
              </div>
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="flex items-center justify-center gap-2 w-full bg-[#ff7a00] text-white font-bold py-3 rounded-lg hover:bg-[#e06900] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00]"
              >
                <Phone size={18} />
                Call Now: {BUSINESS.phone}
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-gray-100">
            <h3 className="font-bold text-[#171717] text-lg mb-6">
              Free Estimate Request
            </h3>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
