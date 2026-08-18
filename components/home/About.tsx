import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { BUSINESS } from "@/lib/constants";
import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";

const highlights = [
  "Professional technicians with hands-on experience",
  "Repair, replacement, and full-service operations",
  "Springs, openers, locks, and full door service",
  "Highest standard of work at the best pricing",
  "Residential and commercial customers welcome",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1625148230889-8195e85aae6b?w=1200&q=80&auto=format&fit=crop"
              alt="Professional garage door service technician with tool belt and ladder"
              width={600}
              height={450}
              className="w-full object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#171717]/90 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ff7a00] flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Call Us Today</p>
                  <a
                    href={`tel:${BUSINESS.phoneHref}`}
                    className="text-white font-bold text-lg hover:text-[#ff7a00] transition-colors"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <SectionHeading
              title="Professional Garage Door Service"
              centered={false}
            />
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                {BUSINESS.name} is comprised of teams of professional technicians
                with hands-on experience in the garage door services sector.
                Whether it is repairing the springs of your garage door,
                replacing the garage door openers, or performing full-service
                operations on your garage door, {BUSINESS.name} ranks high among
                all professional garage door service companies.
              </p>
              <p>
                Unlike many other garage door services, we offer great service
                and bring in talented and experienced contractors and technicians
                with many years of experience — all at the best pricing in the
                area. We are good at what we do, and we&apos;d like to prove it to you.
              </p>
              <p>
                From garage door springs and openers to full door replacement and
                new installation, we provide all types of services at the highest
                standard and for the best price possible. That&apos;s why our customers
                are always satisfied.
              </p>
            </div>

            <ul className="mt-6 space-y-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2
                    size={17}
                    className="text-[#ff7a00] mt-0.5 shrink-0"
                  />
                  {h}
                </li>
              ))}
            </ul>

            <a
              href={`tel:${BUSINESS.phoneHref}`}
              className="mt-8 inline-flex items-center gap-2 bg-[#ff7a00] text-white font-bold px-7 py-3 rounded-md hover:bg-[#e06900] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] focus-visible:ring-offset-2"
            >
              <Phone size={18} />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
