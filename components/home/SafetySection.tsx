import Container from "@/components/ui/Container";
import { BUSINESS } from "@/lib/constants";
import { AlertTriangle, Phone, ShieldCheck } from "lucide-react";

export default function SafetySection() {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="bg-[#155b91] p-6 flex items-center gap-3">
              <ShieldCheck size={28} className="text-white shrink-0" />
              <h2 className="text-white font-black text-2xl">
                Safety First: Why Professional Service Matters
              </h2>
            </div>
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A garage door is the largest moving object in your home. Due
                  to the large number of small parts, its installation and repair
                  are highly technical tasks that require skilled personnel.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Connecting and replacing garage door springs can be extremely
                  dangerous. A proper installation and repair are critical to the
                  performance and safety of your garage door system.
                </p>
              </div>
              <div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 mb-4">
                  <AlertTriangle
                    size={20}
                    className="text-amber-500 shrink-0 mt-0.5"
                  />
                  <p className="text-amber-800 text-sm leading-relaxed">
                    At {BUSINESS.name}, we strongly believe that the installation
                    and repair of a garage door should not be attempted by an
                    unskilled homeowner. Always call a professional.
                  </p>
                </div>
                <a
                  href={`tel:${BUSINESS.phoneHref}`}
                  className="inline-flex items-center gap-2 w-full justify-center bg-[#ff7a00] text-white font-bold py-3 px-5 rounded-lg hover:bg-[#e06900] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] focus-visible:ring-offset-2"
                >
                  <Phone size={18} />
                  Call a Professional: {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
