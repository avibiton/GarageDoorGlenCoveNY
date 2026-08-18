import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import {
  Clock,
  AlertTriangle,
  Star,
  Building2,
  Wrench,
  Layers,
  MapPin,
  ThumbsUp,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Same Day Service",
    desc: "We understand that a broken garage door can't wait. Call us today for same-day garage door service.",
  },
  {
    icon: AlertTriangle,
    title: "24-Hour Emergency Service",
    desc: "Garage door emergencies happen at all hours. Our team is available around the clock for urgent repairs.",
  },
  {
    icon: Star,
    title: "Experienced Technicians",
    desc: "Our technicians have hands-on experience in all aspects of garage door repair, installation, and service.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    desc: "We service both home garages and commercial properties throughout the Glen Cove and Long Island area.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    desc: "Garage door installation requires skilled personnel. We handle every job safely and to the highest standard.",
  },
  {
    icon: Layers,
    title: "All Major Brands",
    desc: "We repair and service all major garage door brands — no matter who made your door, we can fix it.",
  },
  {
    icon: MapPin,
    title: "On-the-Spot Service",
    desc: "Wherever possible, our technicians complete repairs on the spot so you're back to normal fast.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    desc: "We are committed to delivering the highest quality service and ensuring every customer is satisfied.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="mb-12">
          <SectionHeading
            title="Why Choose Us"
            subtitle="We are committed to delivering professional, reliable garage door service you can count on."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex flex-col items-start p-5 rounded-xl border border-gray-100 hover:border-[#155b91]/30 hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-[#ff7a00]/10 flex items-center justify-center mb-3">
                <b.icon size={20} className="text-[#ff7a00]" />
              </div>
              <h3 className="font-bold text-[#171717] mb-1.5">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
