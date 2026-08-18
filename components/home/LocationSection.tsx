import Container from "@/components/ui/Container";
import { BUSINESS } from "@/lib/constants";
import { MapPin, Phone } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ff7a00]/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#ff7a00]" />
              </div>
              <div className="text-left">
                <p className="font-bold text-[#171717]">{BUSINESS.name}</p>
                <address className="not-italic text-gray-500 text-sm leading-snug mt-0.5">
                  {BUSINESS.street}
                  <br />
                  {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                </address>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-gray-200" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ff7a00]/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-[#ff7a00]" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500">Call Us</p>
                <a
                  href={`tel:${BUSINESS.phoneHref}`}
                  className="font-bold text-[#ff7a00] text-lg hover:text-[#e06900] transition-colors"
                >
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Serving Glen Cove, Glen Head, Sea Cliff, Locust Valley, Oyster Bay,
            and surrounding Long Island communities.
          </p>
        </div>
      </Container>
    </section>
  );
}
